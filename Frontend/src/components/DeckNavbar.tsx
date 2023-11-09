import { Button, Navbar, Modal, Input, Textarea } from "react-daisyui"

import { UserButton, useUser } from "@clerk/clerk-react"
import { Link } from "react-router-dom"
import { useRef, useCallback, useState, SyntheticEvent } from "react"
import { FaArrowLeft, FaPlus } from "react-icons/fa"
import logo from '/blue-circle-svgrepo-com.svg'
import axios, { AxiosResponse } from "axios"

type CardTypes = {
  term: string,
  category: string,
  definition: string,
}

type props = {
  deck_num: number,
  updateState: React.Dispatch<React.SetStateAction<CardTypes[]>>,
}

const QuizNavbar = ({ deck_num, updateState }: props) => {
    const ref = useRef<HTMLDialogElement>(null);
    const handleShow = useCallback(() => {
    ref.current?.showModal();
    }, [ref]);


    const [term, setTerm] = useState("");
    const [definition, setDefiniton] = useState("");
    const [category, setCategory] = useState('default');


    const handleTermChange = (event: SyntheticEvent) => {
      const { value } = event.target as unknown as { value: string };
      setTerm(value);
    }

    const handleDefChange = (event: SyntheticEvent) => {
      const { value } = event.target as unknown as { value: string };
      setDefiniton(value);
    }

    const { user } = useUser();
    const user_id = user?.id.toString();
    const handleAddTerm = () => {
      const newTerm = {
        term: term,
        category: category,
        definition: definition,
      }

      axios.post<CardTypes>('/add_card', { user_id:user_id, term:newTerm, deck_num:deck_num })
      .then((response: AxiosResponse<CardTypes>)  => {
        const returnedCards: CardTypes = response.data;
        updateState((Cards) => Cards.concat(returnedCards));
      }).catch((err) => {
        console.log(err);
      })
      setTerm('');
      setDefiniton('');
      setCategory('default');
    }

  return (
    <Navbar className='text-xl normal-case bg-neutral-content fixed top-0 overflow-hidden z-50 flex pr-6 items-center justify-between'>
            <div className="flex items-center">
                <Link to="/">
                <img src={logo} alt="Quizify Logo" className="mr-4"></img>
                </Link>
                <Link to='/decks' className='btn btn-neutral'><FaArrowLeft/> Back</Link>
                <Button onClick={handleShow} className="ml-4"><FaPlus/> Add</Button>
                <Modal backdrop={true} ref={ref} className="text-neutral-content">
                    <Modal.Header className="font-bold">Create Term</Modal.Header>
                    <Modal.Body>
                    <div className="flex flex-col justify-center">
                      <div>
                        <div className="flex w-full component-preview items-center justify-center gap-2 font-sans">
                            <Input placeholder="Term" className="max-w-sm" onChange={handleTermChange} value={term}/>
                        </div>
                        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                            <select className="select w-full max-w-sm border-2 border-neutral" onChange={event => setCategory(event.target.value)}>
                              <option disabled selected>Category</option>
                              <option value={'Math'}>Math</option>
                              <option value={'Science'}>Science</option>
                              <option value={'Writing'}>Writing</option>
                              <option value={'Health'}>Health</option>
                              <option value={'Social Sciences'}>Social Sciences</option>
                              <option value={'Languages'}>Languages</option>
                            </select>
                          </div>
                        </div>
                        <Textarea className="w-full max-w-sm self-center" maxLength={400} size="lg" placeholder="definiton" onChange={handleDefChange} value={definition}/>
                      </div>
                      </Modal.Body>
                      <form method="dialog" className="absolute top-4 right-4">
                          <Button onClick={handleAddTerm}><FaPlus/> Add</Button>
                      </form>
                </Modal>
            </div>
            <UserButton></UserButton>
    </Navbar>
  )
}

export default QuizNavbar