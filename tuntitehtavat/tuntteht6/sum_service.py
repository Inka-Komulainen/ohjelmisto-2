from flask import Flask, Response

app = Flask(__name__)
@app.route('/helloworld/<number1>')
def greet(number1):
    try:
        number1 = int(number1)
        response = ""
        for i in range(number1):
            response = response + "hello world "

        return response


    except ValueError:
        response = "Invalid number as addend, status: 400"
        return response

@app.errorhandler(404)
def page_not_found(error_code):
    response = f"message: {error_code}"

    return response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)