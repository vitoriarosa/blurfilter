from cv2 import cv2
import imutils

def url_to_blur(url):
    #Read Image
    img = imutils.url_to_image(url)

    #Blur
    blur = cv2.GaussianBlur(img,(5,5),0)

    #save image
    cv2.imwrite('imageBLUR.jpg',blur)

    #display
    cv2.imshow('display', blur)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    