import skillStyles from '../../../../css/SkillBox.module.css'

export const SkillBox = ({title, children}) => {
    return (
        <div className={skillStyles.skillboxWrapper}>
            <h2 style={{textAlign: "center"}}>{title}</h2>
            <div className={skillStyles.iconWrapper}>
                {children}
            </div>
        </div>
    )
}
