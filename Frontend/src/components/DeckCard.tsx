import { Card } from "react-daisyui"
import { Link } from "react-router-dom"

type DeckCard = {
    title: string,
    ind: number;
}

const DeckCard = ({ title, ind }: DeckCard) => {
    const to = `/decks/${ind}`;
  return (
    <li>
      <Card className="bg-reading rounded-md text-neutral-content">
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