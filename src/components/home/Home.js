import {SplashCover} from "./SplashCover";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {TabTitle} from "../../utils/TabTitle";
import {ProjectsHome} from "./ProjectsHome";
import {ResumeHome} from "./ResumeHome";
import {ContactHome} from "./ContactHome";
import {AboutHome} from "./AboutHome";

export const Home = () => {
    TabTitle("Jim Inong");

    const { state } = useLocation();
    const { targetId } = state || {};

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({behavior: "smooth"});
        }
    }, [targetId]);

    return (
        <div>
            <SplashCover/>

            <AboutHome/>
            <ProjectsHome/>
            <ResumeHome/>
            <ContactHome/>
        </div>
    )
}