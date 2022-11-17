from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.f3orwbt.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.miniproject

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/guests", methods=["POST"])
def web_nameField_post():
   name_receive = request.form['name_give']
   comment_receive = request.form['comment_give']

   doc = {
         'name': name_receive,
         'comment': comment_receive
   }
   db.guests.insert_one(doc)

   return jsonify({'msg': '입력완료!'})

@app.route("/guests", methods=["GET"])
def web_nameField_get():
   guest_list = list(db.guests.find({}, {'_id': False}))
   return jsonify({'guests':guest_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)