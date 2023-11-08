import QuizNavbar from "../components/DeckNavbar";
import FooterElement from "../components/FooterElement";
import QuizCard from "../components/TermCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Axios from 'axios';

type CardType = {
  term: string,
  category: string,
  definition: string,
}

const Quiz = () => {
  const user = useUser().user;
  const user_id = user?.id.toString();
  const { deckNum } = useParams();
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    if (user_id) {
        Axios.get(`/get_decks/${deckNum}`, {
          params: {
            user_id: user_id,
          }
        })
            .then((response) => {
                setCards(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}, [deckNum, user_id]);


  return (
    <div>
      <QuizNavbar></QuizNavbar>
      <div className="min-h-screen mt-24">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 m-4">
          <ul>
            {cards.map((card: CardType, i) => (
              <QuizCard
                key={i}
                term={card.term}
                category={card.category}
                definition={card.definition}
              ></QuizCard>
            ))}
          </ul>
        </div>
      </div>
      <FooterElement></FooterElement>
    </div>
  );
};

export default Quiz;
