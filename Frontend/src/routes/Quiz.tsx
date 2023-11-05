// type Props = {}
import QuizNavbar from "../components/QuizNavbar";
import FooterElement from "../components/FooterElement"
import QuizCard from "../components/QuizCard";


const Quiz = () => {
  return (
    <div>
        <QuizNavbar></QuizNavbar>
        <div className="min-h-screen mt-24">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 m-4">
            <QuizCard term="Limit" category="Math" definition="a value that a function approaches the output for the given input values"></QuizCard>
            <QuizCard term="Limit" category="Math" definition="a value that a function approaches the output for the given input values"></QuizCard>
            <QuizCard term="Limit" category="Math" definition="a value that a function approaches the output for the given input values"></QuizCard>
            <QuizCard term="Limit" category="Math" definition="a value that a function approaches the output for the given input values"></QuizCard>
            <QuizCard term="Limit" category="Math" definition="a value that a function approaches the output for the given input values"></QuizCard>
            <QuizCard term="Limit" category="Math" definition="a value that a function approaches the output for the given input values"></QuizCard>
        </div>
        </div>
        <FooterElement></FooterElement>
    </div>
  )
}

export default Quiz