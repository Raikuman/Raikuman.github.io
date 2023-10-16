import {Routes, Route} from 'react-router-dom'
import {Home} from "./components/home/Home";
import {Navbar} from "./components/navbar/Navbar";
import {Projects} from "./components/Projects";
import {TabTitle} from "./utils/TabTitle";

function App() {
    TabTitle("Jim Inong");

    return (
        <>
            <div id="fullpage">
                <Navbar/>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='projects' element={<Projects/>}/>
            </Routes>
        </>
    );
}

export default App;
