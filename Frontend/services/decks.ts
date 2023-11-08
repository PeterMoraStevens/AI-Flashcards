import axios from "axios";
// const baseURL = '/';

const getDecks = () => {
    const req = axios.get("/decks");
    return req.then(res => res.data);
}

type getDeckAtId = {
    user_id: object,
}

const getDeckAtId = ({user_id}: getDeckAtId) => {
    const req = axios.get(`/decks/:decknum`, user_id);
    return req.then(res => res.data);
}


export default { getDecks, getDeckAtId }