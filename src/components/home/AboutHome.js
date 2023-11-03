import ColumnSingle from "../layouts/ColumnSingle";
import pageStyles from "../../css/PageDesign.module.css";
import Row from "../layouts/Row";
import {SkillBox} from "./components/skills/SkillBox";
import {SkillIcon} from "./components/skills/SkillIcon";
import javaSVG from '../../resources/skills/java.svg'
import cSharpSVG from '../../resources/skills/cSharp.svg'
import javascript from '../../resources/skills/javascript.svg'
import html from '../../resources/skills/html.svg'
import css from '../../resources/skills/css.svg'
import react from '../../resources/skills/react.svg'
import sqlite from '../../resources/skills/sqlite.svg'
import nodejs from '../../resources/skills/nodejs.svg'
import git from '../../resources/skills/git.svg'
import linux from '../../resources/skills/linux.svg'
import docker from '../../resources/skills/docker.svg'

export const AboutHome = () => {
    return (
        <Row id="#about">
            <ColumnSingle className={`${pageStyles.defaultStyles} ${pageStyles.columnDark}`}>
                <h1 style={{textAlign: "center", borderBottom: "2px solid var(--red)"}}>ABOUT</h1>
                <p style={{textAlign: "center"}}>
                    Avid programmer who likes to make tools for creators. Experience in web development, databases, docker, and more.
                </p>
                <SkillBox title={"Languages"}>
                    <SkillIcon title={"Java"}>
                        <img src={javaSVG} alt={"Java"}/>
                    </SkillIcon>
                    <SkillIcon title={"C#"}>
                        <img src={cSharpSVG} alt={"C#"}/>
                    </SkillIcon>
                    <SkillIcon title={"JavaScript"}>
                        <img src={javascript} alt={"JavaScript"}/>
                    </SkillIcon>
                </SkillBox>
                <SkillBox title={"Front-End"}>
                    <SkillIcon title={"HTML"}>
                        <img src={html} alt={"HTML"}/>
                    </SkillIcon>
                    <SkillIcon title={"CSS"}>
                        <img src={css} alt={"CSS"}/>
                    </SkillIcon>
                    <SkillIcon title={"React"}>
                        <img src={react} alt={"React"}/>
                    </SkillIcon>
                </SkillBox>
                <SkillBox title={"Back-End"}>
                    <SkillIcon title={"SQLite"}>
                        <img src={sqlite} alt={"SQLite"}/>
                    </SkillIcon>
                    <SkillIcon title={"NodeJS"}>
                        <img src={nodejs} alt={"NodeJS"}/>
                    </SkillIcon>
                </SkillBox>
                <SkillBox title={"Other"}>
                    <SkillIcon title={"Git"}>
                        <img src={git} alt={"Git"}/>
                    </SkillIcon>
                    <SkillIcon title={"Linux"}>
                        <img src={linux} alt={"Linux"}/>
                    </SkillIcon>
                    <SkillIcon title={"Docker"}>
                        <img src={docker} alt={"Docker"}/>
                    </SkillIcon>
                </SkillBox>
            </ColumnSingle>
        </Row>
    )
}
