import FooterElement from '../components/FooterElement'
import NavbarElement from '../components/NavbarElement'
import FrequentlyAsked from '../components/FrequentlyAsked'
import { Hero, Tooltip } from 'react-daisyui'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <NavbarElement></NavbarElement>
        <Hero>
          <Hero.Overlay className="bg-[url('/undraw_graduation_re_gthn.svg')] bg-no-repeat bg-contain bg-left-bottom"/>
          <Hero.Content className="text-center mt-12 mb-4">
            <div className="max-w-xl bg-neutral rounded-2xl p-4 bg-opacity-90">
              <h1 className="text-5xl font-bold text-neutral-content">Welcome to Quizify!</h1>
              <p className="py-6 text-lg text-neutral-content">
                Introducing Quizify, your ultimate study companion. Quizify combines cutting-edge technology with personalized learning.
                Our app empowers you to create your own set of definitions, whether you prefer to input them manually or let our AI work its magic.
                <br></br><br></br>
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
        <FrequentlyAsked></FrequentlyAsked>
        <FooterElement></FooterElement>
    </div>
  )
}

export default Landing
