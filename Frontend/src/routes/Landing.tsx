import FooterElement from '../components/FooterElement'
import NavbarElement from '../components/NavbarElement'
import { Hero, Tooltip } from 'react-daisyui'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
        <NavbarElement></NavbarElement>
        <Hero>
          <Hero.Overlay className="bg-opacity-60" />
          <Hero.Content className="text-center mt-12 mb-4">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold">Welcome to Quizify!</h1>
              <p className="py-6 text-lg">
                Introducing Quizify, your ultimate study companion. Quizify combines cutting-edge technology with personalized learning.
                Our app empowers you to create your own set of definitions, whether you prefer to input them manually or let our AI work its magic.
                With Quizify, you can take customized tests, providing answers to prompted definitions.
                What sets us apart is the AI-powered feedback you receive at the end of each test.
                It's like having a personal tutor, pinpointing where you excel and what areas need improvement.
                Get ready to elevate your study experience and stay excited for the incredible learning opportunities that Quizify brings to your academic journey.
              </p>

              <Tooltip message='Ready to supercharge your learning?' className='mt-4'>
                <Link className="btn btn-info-content" to='/'>Get Started</Link>
              </Tooltip>
            </div>
          </Hero.Content>
        </Hero>
        <FooterElement></FooterElement>
    </>
  )
}

export default Landing
