# ScreenOCR
A simple OCR tool built using Python and Tesseract, enable users to drag-select area on their PC's main screen and store OCR result in clipboard.

How to use:
1. Download Tesseract to the same folder where you save the main.py and rename Tesseract folder as OCR Enginee.
2. Run main.py, use Ctrl + S to drag-select main screen area on your PC.

OCR Flow:
1. Firstly use OpenCV to get words parts on the area you select.
2. 3x these words parts using ANTIALIAS function provided by OpenCV.
3. Binary the 3x words parts to get white-background-black-words pngs. 
4. Get OCR result of these pngs through Tesseract.

Differences between OCR through Tesseract only:
1. Tesseract can only get high-quality OCR results of white-background-black-words images. This tool has prebuilt functions to optimize images before OCR, which allows you to select any kinds of images.
2. Tesseract will OCR whole area you select, which may generate unnecessary results. This tool will firstly use OpenCV to get words parts which improve the OCR results.

Where to improve:
1. If you had two screens, this tool can only OCR the main screen.
