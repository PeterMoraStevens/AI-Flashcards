import { Button, Navbar, Modal } from "react-daisyui"
import { UserButton } from "@clerk/clerk-react"
import { Link } from "react-router-dom"
import { useRef, useCallback } from "react"
import logo from '/blue-circle-svgrepo-com.svg'

const QuizNavbar = () => {
    const ref = useRef<HTMLDialogElement>(null);
    const handleShow = useCallback(() => {
    ref.current?.showModal();
    }, [ref]);

  return (
    <Navbar className='text-xl normal-case bg-neutral-content fixed top-0 overflow-hidden z-50 flex pr-6 items-center justify-between'>
            <div className="flex items-center">
                <Link to="/">
                <img src={logo} alt="Quizify Logo" className="mr-4"></img>
                </Link>
                <Button onClick={handleShow} className="mr-4">+ Add</Button>
                <Modal backdrop={true} responsive={true} ref={ref}>
                    <Modal.Header className="font-bold">Hello!</Modal.Header>
                    <Modal.Body>Press ESC key or click outside to close</Modal.Body>
                </Modal>
            </div>
            <UserButton></UserButton>
    </Navbar>
  )
}

export default QuizNavbar