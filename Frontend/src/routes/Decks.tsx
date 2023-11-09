import axios from "axios"
import { useEffect } from "react"
import { useUser } from "@clerk/clerk-react"
import { Loading } from "react-daisyui"
import DecksNavbar from "../components/DecksNavbar"
import FooterElement from "../components/FooterElement"
import DeckCard from "../components/DecksCard"

type CardTypes = {
  title: string,
  cards: []
}

type states = {
  decks: CardTypes[],
  updateDecks: React.Dispatch<React.SetStateAction<CardTypes[]>>,
}

const Decks = ({ decks, updateDecks }: states) => {
    const user = useUser().user;
    const user_id = user?.id.toString();
    useEffect(() => {
        axios.get('/get_all_decks', {
            params:{
                user_id: user_id,
            }
        }).then((response) => {
          updateDecks(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [user_id, updateDecks])

    if (!decks) {
      return (
        <>
          <DecksNavbar updateState={updateDecks}></DecksNavbar>
          <Loading size="lg" variant="infinity" color="primary"/>
          <FooterElement></FooterElement>
        </>
      )
    }

  return (
    <>
        <DecksNavbar updateState={updateDecks}></DecksNavbar>
        <div className="min-h-screen mt-24">
          <div>
            <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 m-4">
              {decks.map((deck: CardTypes, i) => (
                <DeckCard
                  key={i}
                  ind={i}
                  title={deck.title}
                ></DeckCard>
              ))}
              </ul>
            </div>
          </div>
        <FooterElement></FooterElement>
    </>
  )
}

export default Decks