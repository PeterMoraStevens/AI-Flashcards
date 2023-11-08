const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = process.env.MONGO_DB_URI

mongoose.connect(url)
.then(() => {
    console.log("connected to mongo")
}).catch((error) => {
    console.log("error connecting to mongo", error)
})

const userSchema = new mongoose.Schema({
    user_id: String, // You can define other user properties as needed
    decks: [
      {
        deck_num: Number,
        cards: [
          {
            term: String,
            category: String,
            definition: String,
          },
        ],
      },
    ],
  },
  { collection : 'quizify' });

module.exports = mongoose.model('User', userSchema)