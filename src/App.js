import {Routes, Route} from 'react-router-dom'
import {Home} from "./components/home/Home";
import {ProjectsPage} from "./components/pages/ProjectsPage";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='projects' element={<ProjectsPage/>}/>
            </Routes>
        </>
    );
}

export default App;
