import { Navbar } from 'react-daisyui'
import { Link } from 'react-router-dom'
import logo from '/blue-circle-svgrepo-com.svg'

const NavbarElement = () => {
  return (
    <Navbar className='text-xl normal-case bg-neutral-content'>
      <img src={logo} alt="Quizify Logo"></img>
      <Link className="btn text-xl normal-case m-2 primary" to="/">Home</Link>
        {/* <Link className="btn text-xl normal-case m-2" to="/login">Login</Link> */}
    </Navbar>
  )
}

export default NavbarElement