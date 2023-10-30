import { Hero } from "react-daisyui"
import NavbarElement from "../components/NavbarElement"
import FooterElement from "../components/FooterElement"

const About = () => {
  return (
    <div className='flex flex-col items-center h-screen justify-between'>
        <NavbarElement/>
        <Hero className="mt-20">
        <Hero.Content>
            <div className="bg-neutral p-6 rounded-2xl">
            <h1 className="text-5xl font-bold text-neutral-content text-center">Optimize your learning</h1>
            <p className="py-6 text-lg text-neutral-content text-center max-w-lg">
                Introducing Quizify, your ultimate study companion. Quizify combines cutting-edge technology with personalized learning.
                Our app empowers you to create your own set of definitions, whether you prefer to input them manually or let our AI work its magic.
                <br></br><br></br>
                With Quizify, you can take customized tests, providing answers to prompted definitions.
                What sets us apart is the AI-powered feedback you receive at the end of each test.
                It's like having a personal tutor, pinpointing where you excel and what areas need improvement.
                Get ready to elevate your study experience and stay excited for the incredible learning opportunities that Quizify brings to your academic journey.
              </p>
            </div>
        </Hero.Content>
        </Hero>
        <FooterElement></FooterElement>
    </div>
  )
}

export default About