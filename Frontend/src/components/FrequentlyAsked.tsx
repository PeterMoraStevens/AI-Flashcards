import { Accordion, Join } from "react-daisyui"

const FrequentlyAsked = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2 max-w-lg m-6">
        <Join className="w-full" vertical={true}>
            <Accordion icon="arrow" defaultChecked className="bg-neutral border border-neutral-content join-item">
                <Accordion.Title className="text-xl text-neutral-content font-medium">
                    What sets us apart?
                </Accordion.Title>
                <Accordion.Content>
                    {/* <Divider></Divider> */}
                    <p className="text-neutral-content">Our AI model provides you feedback much like a Tutor, but one who is there for you all the time</p>
                </Accordion.Content>
            </Accordion>
            <Accordion icon="arrow" className="border border-neutral-content bg-neutral join-item">
                <Accordion.Title className="text-xl text-neutral-content font-medium">
                    How much does it cost?
                </Accordion.Title>
                <Accordion.Content>
                    {/* <Divider></Divider> */}
                    <p className="text-neutral-content">Nothing! It's free! We're excited that you're using our project and hope it serves you well</p>
                </Accordion.Content>
            </Accordion>
            <Accordion icon="arrow" className="border border-neutral-content bg-neutral join-item">
                <Accordion.Title className="text-xl text-neutral-content font-medium">
                    Who is Quizify for?
                </Accordion.Title>
                <Accordion.Content>
                    {/* <Divider></Divider> */}
                    <p className="text-neutral-content">Everyone and anyone! We believe that no matter who you are, customized feedback is always useful</p>
                </Accordion.Content >
            </Accordion>
        </Join>
    </div>

  )
}

export default FrequentlyAsked