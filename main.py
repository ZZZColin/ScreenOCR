from time import sleep
from PIL import Image, ImageGrab
import tkinter
import ctypes
import pytesseract
import pyperclip
import keyboard
import cv2
import numpy as np
import os


class CTkPrScrn:
    def __init__(self):
        self.__start_x, self.__start_y = 0, 0
        self.__scale = 1

        self.__win = tkinter.Tk()
        self.__win.attributes("-alpha", 0.1)  # 设置窗口半透明
        self.__win.attributes("-fullscreen", True)  # 设置全屏
        self.__win.attributes("-topmost", True)  # 设置窗口在最上层

        self.__width, self.__height = self.__win.winfo_screenwidth(), self.__win.winfo_screenheight()

        # 创建画布
        self.__canvas = tkinter.Canvas(self.__win, width=self.__width, height=self.__height, bg="gray")

        self.__win.bind('<Button-1>', self.xFunc1)  # 绑定鼠标左键点击事件
        self.__win.bind('<ButtonRelease-1>', self.xFunc1)  # 绑定鼠标左键点击释放事件
        self.__win.bind('<B1-Motion>', self.xFunc2)  # 绑定鼠标左键点击移动事件
        self.__win.bind('<Escape>', lambda e: self.__win.destroy())  # 绑定Esc按键退出事件

        user32 = ctypes.windll.user32
        gdi32 = ctypes.windll.gdi32
        dc = user32.GetDC(None)
        widthScale = gdi32.GetDeviceCaps(dc, 8)  # 分辨率缩放后的宽度
        heightScale = gdi32.GetDeviceCaps(dc, 10)  # 分辨率缩放后的高度
        width = gdi32.GetDeviceCaps(dc, 118)  # 原始分辨率的宽度
        height = gdi32.GetDeviceCaps(dc, 117)  # 原始分辨率的高度
        self.__scale = width / widthScale
        # print(self.__width, self.__height, widthScale, heightScale, width, height, self.__scale)

        self.__win.mainloop()  # 窗口持久化

    def xFunc1(self, event):
        # print(f"鼠标左键点击了一次坐标是:x={g_scale * event.x}, y={g_scale * event.y}")
        if event.state == 8:  # 鼠标左键按下
            self.__start_x, self.__start_y = event.x, event.y
        elif event.state == 264:  # 鼠标左键释放
            if event.x == self.__start_x or event.y == self.__start_y:
                return
            im = ImageGrab.grab((self.__scale * self.__start_x, self.__scale * self.__start_y,
                                 self.__scale * event.x, self.__scale * event.y))
            imgName = 'tmp.png'
            im.save(imgName)

            # print('保存成功')
            self.__win.update()
            sleep(0.5)
            self.__win.destroy()

    def xFunc2(self, event):
        # print(f"鼠标左键点击了一次坐标是:x={self.__scale * event.x}, y={self.__scale * event.y}")
        if event.x == self.__start_x or event.y == self.__start_y:
            return
        self.__canvas.delete("prscrn")
        self.__canvas.create_rectangle(self.__start_x, self.__start_y, event.x, event.y,
                                       fill='white', outline='red', tag="prscrn")
        # 包装画布
        self.__canvas.pack()


def preprocess(gray):
    # 1. Sobel算子，x方向求梯度
    sobel = cv2.Sobel(gray, cv2.CV_8U, 1, 0, ksize=3)
    # 2. 二值化
    ret, binary = cv2.threshold(sobel, 0, 255, cv2.THRESH_OTSU + cv2.THRESH_BINARY)

    # 3. 膨胀和腐蚀操作的核函数
    element1 = cv2.getStructuringElement(cv2.MORPH_RECT, (30, 9))
    element2 = cv2.getStructuringElement(cv2.MORPH_RECT, (24, 6))

    # 4. 膨胀一次，让轮廓突出
    dilation = cv2.dilate(binary, element2, iterations=1)

    # 5. 腐蚀一次，去掉细节，如表格线等。注意这里去掉的是竖直的线
    erosion = cv2.erode(dilation, element1, iterations=1)

    # 6. 再次膨胀，让轮廓明显一些
    dilation2 = cv2.dilate(erosion, element2, iterations=3)

    # 7. 存储中间图片
    cv2.imwrite("binary.png", binary)
    cv2.imwrite("dilation.png", dilation)
    cv2.imwrite("erosion.png", erosion)
    cv2.imwrite("dilation2.png", dilation2)

    return dilation2


def findTextRegion(img):
    region = []

    # 1. 查找轮廓
    contours, hierarchy = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    # 2. 筛选那些面积小的
    for i in range(len(contours)):
        cnt = contours[i]
        # 计算该轮廓的面积
        area = cv2.contourArea(cnt)

        # 面积小的都筛选掉
        if (area < 1000):
            continue

        # 轮廓近似，作用很小
        epsilon = 0.001 * cv2.arcLength(cnt, True)
        approx = cv2.approxPolyDP(cnt, epsilon, True)

        # 找到最小的矩形，该矩形可能有方向
        rect = cv2.minAreaRect(cnt)
        # print("rect is: " + rect)

        # box是四个点的坐标
        box = cv2.boxPoints(rect)
        box = np.int0(box)

        # 计算高和宽
        height = abs(box[0][1] - box[2][1])
        width = abs(box[0][0] - box[2][0])

        # 筛选那些太细的矩形，留下扁的
        if (height > width * 1.2):
            continue

        region.append(box)

    return region


def convert(img_path):
    img = Image.open(img_path)

    # 模式L”为灰色图像，它的每个像素用8个bit表示，0表示黑，255表示白，其他数字表示不同的灰度。
    Img = img.convert('L')
    Img = Img.resize((Img.size[0]*3, Img.size[1]*3), Image.ANTIALIAS)
    Img.save("grey.png")

    # 自定义灰度界限，大于这个值为白色，小于这个值为黑色
    threshold = 200

    table = []
    for i in range(256):
        if i < threshold:
            table.append(1)
        else:
            table.append(0)

    # 图片二值化
    photo = Img.point(table, '1')
    photo.save(img_path)


def detect(img):
    # 1.  转化成灰度图
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # 2. 形态学变换的预处理，得到可以查找矩形的图片
    dilation = preprocess(gray)

    # 3. 查找和筛选文字区域
    region = findTextRegion(dilation)

    # 4. 用绿线画出这些找到的轮廓
    if len(region) > 0:
        for box_index, box in enumerate(region):
            cv2.drawContours(img, [box], 0, (0, 255, 0), 2)
            xs = [x[1] for x in box]
            ys = [x[0] for x in box]
            cv2.imwrite(str(box_index)+".png", img[min(xs):max(xs),min(ys):max(ys)])
            convert(str(box_index)+".png")
            target_image.append(str(box_index)+".png")
    else:
        pass
        # print("\033[1;31mNo words detected\033[0m")

    # cv2.namedWindow("img", cv2.WINDOW_NORMAL)
    # cv2.imshow("img", img)

    # 带轮廓的图片
    cv2.imwrite("contours.png", img)

    cv2.waitKey(0)
    cv2.destroyAllWindows()


if __name__ == '__main__':
    print("Use Ctrl + S to select data area on your main screen, then OCR result will be stored in your clipboard.")

    pytesseract.pytesseract.tesseract_cmd = r".\OCR Engine\tesseract.exe"

    while True:
        target_image = []
        keyboard.wait('ctrl+s')
        prScrn = CTkPrScrn()
        print("Processing...")
        img = cv2.imread('tmp.png')
        detect(img)

        tmp_str_list = []
        for t_img in target_image:
            tmp_str = pytesseract.image_to_string(Image.open(t_img)).strip()
            tmp_str_list.append(tmp_str)
            os.remove(t_img)
        try:
            os.remove("tmp.png")
            os.remove("grey.png")
            os.remove("erosion.png")
            os.remove("dilation2.png")
            os.remove("dilation.png")
            os.remove("contours.png")
            os.remove("binary.png")
        except:
            pass

        if ' '.join(tmp_str_list).strip() != '':
            pyperclip.copy(' '.join(tmp_str_list).replace("\n"," "))
            print(' '.join(tmp_str_list).replace("\n"," "))
        else:
            print("No words detected")