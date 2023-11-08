import { Card, Badge } from "react-daisyui"

type CardProps = {
    term: string,
    category: string,
    definition: string,
}

const QuizCard = ({term, category, definition}: CardProps) => {
  return (
    <li>
      <Card className="bg-reading rounded-md text-neutral-content">
        <Card.Body className="items-center text-center">
          <Card.Title tag="h2">
              {term}
              <Badge variant="outline" color="primary">{category}</Badge>
          </Card.Title>
          <p className="rounded-md">{definition}</p>
        </Card.Body>
      </Card>
    </li>
  )
}

export default QuizCard