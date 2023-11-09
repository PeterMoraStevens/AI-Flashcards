import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp} from "@clerk/clerk-react";
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import { useState } from "react";
import ScrollTop from './components/ScrollTop';
import Landing from './routes/Landing';
import Invalid from './routes/Invalid';
import About from './routes/About';
import Deck from "./routes/Deck";
import Decks from "./routes/Decks";


const ClerkRoutes = () => {
    const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
    const navigate = useNavigate();

    type DeckTypes = {
        title: string,
        cards: []
    }

    type CardTypes = {
        term: string,
        category: string,
        definition: string,
    }

    const [decks, setDecks] = useState<DeckTypes[]>([])
    const [cards, setCards] = useState<CardTypes[]>([])

    return (
        <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
            <Routes>
                <Route path='/' element={<Landing/>}></Route>
                <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />}/>
                <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />}/>
                <Route
                path="/decks"
                element={
                <>
                    <SignedIn>
                        <Decks decks={decks} updateDecks={setDecks}></Decks>
                    </SignedIn>
                    <SignedOut>
                        <RedirectToSignIn />
                    </SignedOut>
                </>
                }
                />
                <Route path="/decks/:deckNum" element={
                    <>
                        <SignedIn>
                            <Deck deck={cards} updateDeck={setCards}></Deck>
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn></RedirectToSignIn>
                        </SignedOut>
                    </>
                }>
                </Route>
                <Route path='about' element={<About/>}></Route>
                <Route path='*' element={<Invalid/>}></Route>
            </Routes>
        </ClerkProvider>
    )
}

const App = () => {
    
    return (
    <BrowserRouter>
        <ScrollTop></ScrollTop>
        <ClerkRoutes></ClerkRoutes>
    </BrowserRouter>
    )
}

export default App