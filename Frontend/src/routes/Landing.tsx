import FooterElement from '../components/FooterElement'
import NavbarElement from '../components/NavbarElement'
import FrequentlyAsked from '../components/FrequentlyAsked'
import { Hero, Tooltip } from 'react-daisyui'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <NavbarElement></NavbarElement>
        <Hero className='mt-20'>
          <Hero.Overlay className="bg-[url('/undraw_graduation_re_gthn.svg')] bg-contain bg-left-bottom bg-opacity-50"/>
          <Hero.Content className="text-center mt-12 mb-4">
            <div className="max-w-xl bg-neutral rounded-2xl p-4">
              <h1 className="text-5xl font-bold text-neutral-content">Welcome to Quizify!</h1>
              <p className="py-6 text-lg text-neutral-content">
                Optimize your studying needs
              </p>

              <Tooltip message='Ready to supercharge your learning?' className='mt-2'>
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
