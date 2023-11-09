import axios from "axios"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/clerk-react"
import { Loading, Hero } from "react-daisyui"
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
          setLoading(false)
        }).catch((err) => {
            console.log(err);
            setLoading(false)
        })
    }, [user_id, updateDecks, decks])

    const [loading, setLoading] = useState(true);

    if (loading) {
      return (
        <>
          <DecksNavbar updateState={updateDecks}></DecksNavbar>
          <div className="min-h-screen mt-24 flex justify-center">
          <Loading size="lg" variant="infinity" color="neutral"/>
          </div>
          <FooterElement></FooterElement>
        </>
      )
      }

      if (decks.length === 0) {
        return(
          <>
          <DecksNavbar updateState={updateDecks}></DecksNavbar>
          <div className="min-h-screen mt-32">
            <div className="flex justify-center">
              <Hero className="max-w-xl">
                <Hero.Overlay className="rounded-lg"/>
                <Hero.Content className="text-center">
                  <div>
                    <h1 className="text-5xl font-bold text-neutral-content">No Decks?</h1>
                    <p className="py-6 text-neutral-content">
                      Click <b>Add</b> to create your first Deck!
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
                  updateDecks={updateDecks}
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