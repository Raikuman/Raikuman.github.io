import {Routes, Route} from 'react-router-dom'
import {Home} from "./components/Home";
import {Navbar} from "./components/navbar/Navbar";

function App() {
    return (
        <>
            <div id="fullpage">
                <Navbar/>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/*<Route path='about' element={<SplashAbout/>}/>*/}
            </Routes>
        </>
    );
}

export default App;
