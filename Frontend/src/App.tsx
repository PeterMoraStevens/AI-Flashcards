import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './routes/Login';
import Landing from './routes/Landing';
import Invalid from './routes/Invalid';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing/>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='*' element={<Invalid/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App