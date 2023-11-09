import QuizNavbar from "../components/DeckNavbar";
import FooterElement from "../components/FooterElement";
import QuizCard from "../components/TermCard";
import { Loading, Hero } from "react-daisyui";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Axios from 'axios';

type CardType = {
  term: string,
  category: string,
  definition: string,
}

type props = {
  deck: CardType[],
  updateDeck: React.Dispatch<React.SetStateAction<CardType[]>>
}

const Quiz = ({ deck, updateDeck }: props) => {
  const user = useUser().user;
  const user_id = user?.id.toString();
  const { deckNum } = useParams();

  useEffect(() => {
    if (user_id) {
        Axios.get(`/get_decks/${deckNum}`, {
          params: {
            user_id: user_id,
          }
        })
            .then((response) => {
                setLoading(false);
                updateDeck(response.data);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }
}, [deckNum, user_id, deck]);

const [loading, setLoading] = useState(true);

    if (loading) {
      return (
        <>
          <QuizNavbar deck_num={Number(deckNum)} updateState={updateDeck}></QuizNavbar>
          <div className="min-h-screen mt-24 flex justify-center">
          <Loading size="lg" variant="infinity" color="neutral"/>
          </div>
          <FooterElement></FooterElement>
        </>
      )
    }

  if (deck.length === 0) {
    return(
      <>
      <QuizNavbar deck_num={Number(deckNum)} updateState={updateDeck}></QuizNavbar>
      <div className="min-h-screen mt-32">
        <div className="flex justify-center">
          <Hero className="max-w-xl">
            <Hero.Overlay className="rounded-lg"/>
            <Hero.Content className="text-center">
              <div>
                <h1 className="text-5xl font-bold text-neutral-content">No cards?</h1>
                <p className="py-6 text-neutral-content">
                  Click <b>Add</b> to create your first card!
                </p>
              </div>
            </Hero.Content>
          </Hero>
        </div>
      </div>
      <FooterElement></FooterElement>
      </>
    )
  }

  return (
    <div>
      <QuizNavbar deck_num={Number(deckNum)} updateState={updateDeck}></QuizNavbar>
      <div className="min-h-screen mt-24">
        <div>
          <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 m-4">
            {deck.map((card: CardType, i) => (
              <QuizCard
                key={i}
                ind={i}
                deck_num={Number(deckNum)}
                updateCards={updateDeck}
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
