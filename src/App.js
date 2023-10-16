import {Routes, Route} from 'react-router-dom'
import {Home} from "./components/home/Home";
import {Navbar} from "./components/navbar/Navbar";
import {ProjectsPage} from "./components/pages/ProjectsPage";
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
                <Route path='projects' element={<ProjectsPage/>}/>
            </Routes>
        </>
    );
}

export default App;
