import { Footer } from "react-daisyui";
import { Link } from "react-router-dom";
import logo from '/blue-circle-svgrepo-com.svg'

const FooterElement = () => {
  return (
    <>
        <Footer className="p-10 bg-neutral-content text-info-content">
            <div>
                <img src={logo}></img>
                <p>
                Quizify
                <br />
                Optimize your studying needs
                </p>
            </div>
            <div>
                <Footer.Title>Company</Footer.Title>
                <Link to='/about' className="link link-hover">About us</Link>
                <Link to='/contact' className="link link-hover">Contact</Link>
            </div>
        </Footer>
    </>
  )
}

export default FooterElement