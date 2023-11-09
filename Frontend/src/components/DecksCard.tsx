import { Card, Button } from "react-daisyui"
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom"
import DeleteDeckButton from "./DeleteDeckBtn";

type CardTypes = {
  title: string,
  cards: []
}

type DeckCard = {
    title: string,
    ind: number,
    updateDecks: React.Dispatch<React.SetStateAction<CardTypes[]>>
}

const DeckCard = ({ title, ind, updateDecks }: DeckCard) => {
    const to = `/decks/${ind}`;

    const handleDelete = (deletedDeck: number) => {
      updateDecks((decks) => decks.filter((deck, i) => i !== deletedDeck));
    }

  return (
    <li>
      <Card className="bg-reading rounded-md text-neutral">
        <div className="absolute top-2 right-2">
          <DeleteDeckButton deckTitle={title} deckId={ind} onDelete={handleDelete} icon={<BsFillTrashFill/>}>
          </DeleteDeckButton>
        </div>
        <div className="absolute top-16 right-2">
          <Button>
            <FiEdit/>
          </Button>
        </div>
        <Card.Body className="items-center text-center">
          <Card.Title tag="h2">
            { title }
          </Card.Title>
          <Link className="btn btn-info-content" to={to}>Open Deck</Link>
        </Card.Body>
      </Card>
    </li>
  )
}

export default DeckCard