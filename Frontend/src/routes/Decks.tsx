import axios from "axios"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/clerk-react"
import DecksNavbar from "../components/DecksNavbar"
import FooterElement from "../components/FooterElement"
import DeckCard from "../components/DeckCard"

type CardTypes = {
    title: string,
}

const Decks = () => {
    const [decks, setDecks] = useState<CardTypes[]>([])
    const user = useUser().user;
    const user_id = user?.id.toString();
    useEffect(() => {
        axios.get('/get_all_decks', {
            params:{
                user_id: user_id,
            }
        }).then((response) => {
            setDecks(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [user_id])

  return (
    <>
        <DecksNavbar></DecksNavbar>
        <div className="min-h-screen mt-24">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 m-4">
          <ul>
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