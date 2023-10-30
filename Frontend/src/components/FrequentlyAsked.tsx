import { Accordion, Join } from "react-daisyui"

const FrequentlyAsked = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2 max-w-lg m-6">
        <Join className="w-full" vertical={true}>
            <Accordion icon="arrow" defaultChecked className="border border-neutral-content bg-neutral-content join-item">
                <Accordion.Title className="text-xl font-medium">
                    What sets us apart?
                </Accordion.Title>
                <Accordion.Content>
                    {/* <Divider></Divider> */}
                    <p>Our AI model provides you feedback much like a Tutor, but one who is there for you all the time</p>
                </Accordion.Content>
            </Accordion>
            <Accordion icon="arrow" className="border border-base-300 bg-neutral-content join-item">
                <Accordion.Title className="text-xl font-medium">
                    How much does it cost?
                </Accordion.Title>
                <Accordion.Content>
                    {/* <Divider></Divider> */}
                    <p>Nothing! It's free! We're excited that you're using our project and hope it serves you well</p>
                </Accordion.Content>
            </Accordion>
            <Accordion icon="arrow" className="border border-base-300 bg-neutral-content join-item">
                <Accordion.Title className="text-xl font-medium">
                    Who is Quizify for?
                </Accordion.Title>
                <Accordion.Content>
                    {/* <Divider></Divider> */}
                    <p>Everyone and anyone! We believe that no matter who you are, customized feedback is always useful</p>
                </Accordion.Content >
            </Accordion>
        </Join>
    </div>

  )
}

export default FrequentlyAsked