import requests

payload = {'url': "https://static.quizur.com/i/b/59385871721df7.7189893759385871606133.99577264.jpg"}

r = requests.get("http://127.0.0.1:5000/", params=payload)
