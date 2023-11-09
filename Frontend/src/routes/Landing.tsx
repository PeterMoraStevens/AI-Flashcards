import FooterElement from '../components/FooterElement'
import NavbarElement from '../components/NavbarElement'
import FrequentlyAsked from '../components/FrequentlyAsked'
import PersonalFeedback from '/undraw_notebook_re_id0r.svg'
import GuidedGrowth from '/undraw_random_thoughts_re_cob6.svg'
import { TypeAnimation } from 'react-type-animation'
import { Hero, Tooltip, Card } from 'react-daisyui'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-reading'>
        <NavbarElement></NavbarElement>
        <Hero className='mt-20'>
          <Hero.Overlay className="bg-[url('/undraw_graduation_re_gthn.svg')] bg-contain bg-left-bottom bg-opacity-50"/>
          <Hero.Content className="text-center mt-12 mb-4">
            <div className="max-w-xl bg-neutral rounded-2xl p-4">
                <h1 className="text-5xl font-bold text-neutral-content">Welcome to Quizify!</h1>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Optimize your studying needs',
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Get personalized feedback',
                    2000,
                    'Enjoy guided growth',
                    2000,
                    'Completely free! (Free.99)',
                    2000
                  ]}
                  wrapper="span"
                  speed={25}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  className='text-neutral-content'
                  repeat={Infinity}
                />
                <br></br>
                <Tooltip message="Ready to supercharge your learning? (it's free!)" className='mt-2'>
                    <Link className="btn btn-info-content" to='/decks'>Get Started</Link>
                </Tooltip>
            </div>
          </Hero.Content>
        </Hero>

        <div className='max-w-3xl mt-20 m-4'>
            <Card bordered={false} side="lg">
                <Card.Image src={PersonalFeedback} alt="presonalized feedback" className='p-8'/>
                <Card.Body className='bg-neutral rounded-xl max-h-min'>
                <Card.Title tag="h2" className='text-neutral-content'>Personalized Feedback</Card.Title>
                <p className='text-neutral-content'>It's like having a personal tutor, pinpointing where you excel and what areas need improvement.</p>
                <Card.Actions className="justify-end">

                </Card.Actions>
                </Card.Body>
            </Card>
        </div>
        <div className='max-w-3xl m-4'>
            <Card bordered={false} side="lg">
                <Card.Image src={GuidedGrowth} alt="Guided Growth" className='p-8'/>
                <Card.Body className='bg-neutral rounded-xl max-h-min'>
                <Card.Title tag="h2" className='text-neutral-content'>Guided Growth</Card.Title>
                <p className='text-neutral-content'>What sets us apart is the AI-powered feedback you receive at the end of each test.</p>
                <Card.Actions className="justify-end">

                </Card.Actions>
                </Card.Body>
            </Card>
        </div>

        <FrequentlyAsked></FrequentlyAsked>
        <FooterElement></FooterElement>
    </div>
  )
}

export default Landing
