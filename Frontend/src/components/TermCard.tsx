import { Card, Badge, Button } from "react-daisyui"
import { FiEdit } from "react-icons/fi"
import { BsFillTrashFill } from "react-icons/bs"
import DeleteCardButton from "./DeleteCardBtn"

type CardType = {
  term: string,
  category: string,
  definition: string,
}

type CardProps = {
    ind: number,
    term: string,
    deck_num: number,
    category: string,
    definition: string,
    updateCards: React.Dispatch<React.SetStateAction<CardType[]>>,
}

const QuizCard = ({ deck_num, ind, term, category, definition, updateCards }: CardProps) => {

  const handleDelete = (deletedCard: number) => {
    updateCards((cards) => cards.filter((card, i) => i !== deletedCard));
  }

  return (
    <li>
      <Card className="bg-reading rounded-md text-neutral">
      <div className="absolute top-2 right-2">
        <DeleteCardButton cardId={ind} deck_num={deck_num} onDelete={handleDelete} icon={<BsFillTrashFill/>}>
        </DeleteCardButton>
      </div>
      <div className="absolute top-16 right-2">
        <Button>
          <FiEdit/>
        </Button>
      </div>
        
        <Card.Body className="items-center text-center">
          <Card.Title tag="h2">
              {term}
              <Badge variant="outline" color="primary">{category}</Badge>
          </Card.Title>
          <p className="rounded-md break-words pr-16 pl-16">{definition}</p>
        </Card.Body>
      </Card>
    </li>
  )
}

export default QuizCard