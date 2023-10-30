import { Card, Button, Form, Input } from "react-daisyui"
import { useState, ChangeEvent } from "react"

const CardElement = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {setUsername(e.target.value)}
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}

    return (
        <Card className="flex justify-center max-w-sm shadow-2xl bg-base-100 m-12">
                <Card.Body>
                <Form>
                    <Form.Label title="Email" />
                    <Input onChange={handleUsername} type="text" placeholder="email" className="input-bordered" value={username}></Input>
                </Form>
                <Form>
                    <Form.Label title="Password" />
                    <Input onChange={handlePassword} type="text" placeholder="password" className="input-bordered" value={password}></Input>
                </Form>
                <Form className="mt-6">
                    <Button>Login</Button>
                </Form>
                </Card.Body>
        </Card>
    )
}

export default CardElement