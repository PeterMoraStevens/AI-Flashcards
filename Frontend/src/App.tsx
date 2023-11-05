import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp} from "@clerk/clerk-react";
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import Landing from './routes/Landing';
import Invalid from './routes/Invalid';
import About from './routes/About';
import Quiz from "./routes/Quiz";

// import Secret from "./components/Secret";

// const SignedInRoutes = () => {
    
// }

const ClerkRoutes = () => {
    const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
    const navigate = useNavigate();

    return (
        <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
            <Routes>
                <Route path='/' element={<Landing/>}></Route>
                <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />}/>
                <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />}/>
                <Route
                path="/quiz"
                element={
                <>
                    <SignedIn>
                        <Quiz></Quiz>
                    </SignedIn>
                    <SignedOut>
                        <RedirectToSignIn />
                    </SignedOut>
                </>
                }
                />
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