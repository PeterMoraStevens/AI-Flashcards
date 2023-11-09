import { Button, Navbar, Modal, Input } from "react-daisyui"
import { UserButton, useUser } from "@clerk/clerk-react"
import { Link } from "react-router-dom"
import { useState, useRef, useCallback, SyntheticEvent } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import logo from '/blue-circle-svgrepo-com.svg'
import axios, { AxiosResponse } from "axios"

type CardTypes = {
  title: string,
  cards: []
}

type states = {
  updateState: React.Dispatch<React.SetStateAction<CardTypes[]>>,
}

const QuizNavbar = ({ updateState }: states) => {
    const ref = useRef<HTMLDialogElement>(null);
    const handleShow = useCallback(() => {
    ref.current?.showModal();
    }, [ref]);


    const [title, setTitle] = useState("")
    const handleInputChange = (event: SyntheticEvent) => {
      const { value } = event.target as unknown as { value: string };
      setTitle(value);
    }

    const { user } = useUser();
    const user_id = user?.id.toString();
    const handleAddDeck = () => {
      const newDeck = {
        title: title,
        cards: [],
      }

      axios.post<CardTypes>('/add_deck', { user_id:user_id, deck:newDeck })
      .then((response: AxiosResponse<CardTypes>)  => {
        const returnedDeck: CardTypes = response.data;
        updateState((Decks) => Decks.concat(returnedDeck));
      }).catch((err) => {
        console.log(err);
      })
      setTitle('');
    }

  return (
    <Navbar className='text-xl normal-case bg-neutral-content fixed top-0 overflow-hidden z-50 flex pr-6 items-center justify-between'>
            <div className="flex items-center">
                <Link to="/">
                  <img src={logo} alt="Quizify Logo" className="mr-4"></img>
                </Link>
                <Link to='/' className='btn btn-neutral'><FaArrowLeft/> Back</Link>
                <Button onClick={handleShow} className="ml-4"><FaPlus/>Add</Button>
                <Modal backdrop={true} ref={ref}>
                    <Modal.Header className="font-bold">Create New Deck</Modal.Header>
                    <Modal.Body>
                    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                        <Input placeholder="Title" onChange={handleInputChange} value={title}/>
                    </div>
                    </Modal.Body>
                    <form method="dialog" className="absolute top-4 right-4">
                        <Button onClick={handleAddDeck}><FaPlus/> Add</Button>
                    </form>
                </Modal>
            </div>
            <UserButton></UserButton>
    </Navbar>
  )
}

export default QuizNavbar