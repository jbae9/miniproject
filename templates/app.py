from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.f3orwbt.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/orders", methods=["POST"])
def web_nameField_post():
   name_receive = request.form['name_give']
   comment_receive = request.form['comment_give']

   doc = {
         'name': name_recive,
         'comment': comment_receive
   }
   db.orders.insert_one(doc)

   return jsonify({'msg': '입력완료!'})

@app.route("/mars", methods=["GET"])
def web_nameField_get():
   all_users = list(db.users.find({}, {'_id': False}))
   return jsonify({'users':user_list})

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)