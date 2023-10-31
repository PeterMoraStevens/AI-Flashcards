import { Navbar } from 'react-daisyui'
import { Link } from 'react-router-dom'
import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import logo from '/blue-circle-svgrepo-com.svg'


const NavbarElement = () => {
  return (
    <>
      <SignedIn>
        <Navbar className='text-xl normal-case bg-neutral-content fixed top-0 overflow-hidden z-50 flex justify-between pr-6'>
          <Link to="/"><img src={logo} alt="Quizify Logo"></img></Link>
          <UserButton></UserButton>
            {/* <Link className="btn text-xl normal-case m-2" to="/login">Login</Link> */}
        </Navbar>
      </SignedIn>
      <SignedOut>
          <Navbar className='text-xl normal-case bg-neutral-content fixed top-0 overflow-hidden z-50 flex justify-between pr-6'>
            <Link to="/"><img src={logo} alt="Quizify Logo"></img></Link>
            <Link to="/sign-in/*" className='btn btn-neutral'>Sign In</Link>
          </Navbar>
      </SignedOut>
    </>
  )
}

export default NavbarElement