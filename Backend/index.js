require('dotenv').config();
const express = require('express');
const User = require('./models/user');
const cors = require('cors');
const user = require('./models/user');
const app = express();

app.use(express.json())
app.use(cors());
// app.use(express.static('dist'))

// get from the db at user -> list of decks

app.get('/get_all_decks', (req, res) => {
    const user_id = req.query.user_id;

    if (!user_id) {
        console.log("Error getting user ID from the query parameters");
        return res.status(400).send("Bad Request");
    }

    User.findOne({ user_id })
        .then((user, err) => {
            
        if (err) {
            console.log(err);
            return res.status(500).send("Internal Server Error");
        }

        if (!user) {
            console.log("User not found");
            return res.status(404).send("User Not Found");
        }
        
        const decks = user.decks;

        if (!decks) {
            console.log("Decks not found");
            return res.status(404).send("Decks Not Found");
        }

        res.json(decks);
    });
})

// Change the POST route to GET to retrieve deck data
app.get('/get_decks/:deckNum', (req, res) => {
    const user_id = req.query.user_id;

    if (!user_id) {
        console.log("Error getting user ID from the query parameters");
        return res.status(400).send("Bad Request");
    }

    User.findOne({ user_id })
        .then((user, err) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Internal Server Error");
        }

        if (!user) {
            console.log("User not found");
            return res.status(404).send("User Not Found");
        }

        const deck = user.decks.find((deck, i) => i === Number(req.params.deckNum));
        
        if (!deck) {
            console.log("Deck not found");
            return res.status(404).send("Deck Not Found");
        }

        res.json(deck.cards);
    });
});

  

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})