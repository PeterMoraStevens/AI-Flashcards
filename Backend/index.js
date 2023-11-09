require('dotenv').config();
const express = require('express');
const User = require('./models/user');
const cors = require('cors');
const user = require('./models/user');
const app = express();

app.use(express.json())
app.use(cors());
app.use(express.static('dist'))

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


app.post('/add_deck', (req, res) => {
    const body = req.body;
    const user_id = body.user_id;
    const newDeck = body.deck;
  
    if (!user_id) {
      console.log("Error getting user ID from the body parameters");
      return res.status(400).send("Bad Request");
    }
  
    User.findOneAndUpdate({ user_id: user_id }, { $push: { decks: newDeck } }, { upsert: true, new: true })
      .then(updatedDeck => {
        res.json(updatedDeck);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
  });

app.post('/add_card', (req, res) => {
    const body = req.body;
    const user_id = body.user_id;
    const newTerm = body.term;
    const deck_num = body.deck_num;

    if(!user_id) {
        console.log("Error getting user ID from the body parameters");
        return res.status(400).send("Bad Request");
    }

    User.findOneAndUpdate(
        { user_id: user_id },
        { $push: { [`decks.${deck_num}.cards`]: { term: newTerm.term, category: newTerm.category, definition: newTerm.definition } } },
        { new: true }
    )
        .then(updatedUser => {
            if (!updatedUser) {
                console.log(`User with ID ${user_id} not found.`);
                return res.status(404).send("User not found");
            }

            // Find the updated deck
            const updatedDeck = updatedUser.decks[deck_num];

            res.json(updatedDeck);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Internal Server Error");
        });
});

app.delete('/delete_deck/:deck_num', (req, res) => {
    const deck_num = req.params.deck_num;
    const user_id = req.query.user_id;

        // Find the user by user_id
    User.findOne({ user_id: user_id })
        .then((user) => {
            if (!user) {
                console.log(`User with ID ${user_id} not found.`);
                return res.status(404).send("User not found");
            }
            
            user.decks.splice(deck_num, 1);
            user.save();
            res.status(200).send(`card removed at index ${deck_num}`);
    }) 
});

app.delete('/delete_card/:card_num', (req, res) => {
    const card_num = req.params.card_num;
    const user_id = req.query.user_id;
    const deck_num = req.query.deck_num;

        // Find the user by user_id
    User.findOne({ user_id: user_id })
        .then((user) => {
            if (!user) {
                console.log(`User with ID ${user_id} not found.`);
                return res.status(404).send("User not found");
            }
            
            user.decks[deck_num].cards.splice(card_num, 1);
            user.save();
            res.status(200).send(`card removed at index ${deck_num}`);
    })
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})