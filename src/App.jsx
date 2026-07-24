import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Janken from './Janken2'
import Count from './Count'
import Push from './Push'

export default function App() {
    return (
        <>
            <Link to="/">ホーム</Link>
            <Link to='/janken'>じゃんけん</Link>
            <Link to='/count'>カウント</Link>
            <Link to='/push'>プッシュ</Link>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/janken' element={<Janken />} />
                <Route path='/count' element={<Count />} />
                <Route path='/push' element={<Push />} />
            </Routes>
        </>
    )
}