import { Navbar, Button } from 'react-daisyui'
import { Link } from 'react-router-dom'
import logo from '/blue-circle-svgrepo-com.svg'

const NavbarElement = () => {
  return (
    <Navbar className='text-xl normal-case bg-neutral-content'>
      <img src={logo} alt="Quizify Logo"></img>
      <Button className="text-xl normal-case m-2" color="primary">
        <Link to="/">Home</Link>
      </Button>
      <Button className='text-xl normal-case m-2' color='primary'>
        <Link to="/login">Login</Link>
      </Button>
    </Navbar>
  )
}

export default NavbarElement