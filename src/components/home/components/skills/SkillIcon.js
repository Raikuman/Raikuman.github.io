import skillStyles from '../../../../css/SkillBox.module.css'

export const SkillIcon = ({title, children}) => {
    return (
        <div className={skillStyles.icon}>
            {children}
            <h3>{title}</h3>
        </div>
    )
}
