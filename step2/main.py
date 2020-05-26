from flask import Flask, request, send_file
import step1

app_real2u = Flask(__name__)

@app_real2u.route('/url_to_blur', methods=['GET'])
def image_blur():
    print(request.args.to_dict())
    url = request.args['url']
    step1.url_to_blur(url)
    return send_file('imageBLUR.jpg', mimetype='image/gif')

if __name__ == '__main__':
    app_real2u.run()