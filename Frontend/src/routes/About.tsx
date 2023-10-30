import { Hero, Button } from "react-daisyui"

const About = () => {
  return (
    <>
        <Hero className="bg-neutral-content">
        <Hero.Content>
            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6 text-lg text-neutral-content">
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
    </>
  )
}

export default About