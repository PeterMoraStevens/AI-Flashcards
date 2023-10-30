import { Accordion } from "react-daisyui"

const FrequentlyAsked = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2 max-w-lg m-6">
        <Accordion defaultChecked icon="arrow">
        <Accordion.Title className="text-xl font-medium bg-neutral-content">
            What sets us apart?
        </Accordion.Title>
        <Accordion.Content className="bg-neutral-content">
            {/* <Divider></Divider> */}
            <p>Our AI model provides you feedback much like a Tutor, but one who is there for you all the time</p>
        </Accordion.Content>
        </Accordion>
        <Accordion icon="arrow">
        <Accordion.Title className="text-xl font-medium bg-neutral-content">
            How much does it cost?
        </Accordion.Title>
        <Accordion.Content className="bg-neutral-content">
            {/* <Divider></Divider> */}
            <p>Nothing! It's free! We're excited that you're using our project and hope it serves you well</p>
        </Accordion.Content>
        </Accordion>
        <Accordion icon="arrow">
        <Accordion.Title className="text-xl font-medium bg-neutral-content">
            Who is Quizify for?
        </Accordion.Title>
        <Accordion.Content className="bg-neutral-content">
            {/* <Divider></Divider> */}
            <p>Everyone and anyone! We believe that no matter who you are, customized feedback is always useful</p>
        </Accordion.Content >
        </Accordion>
    </div>

  )
}

export default FrequentlyAsked