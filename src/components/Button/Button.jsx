import './Button.css';

export default function Button(props) {
    return (
        <a className={"button"} href={props.buttonLink} target={props.newTab ? "_blank" : "_self"}>{props.buttonContent} {props.icon ? <span className={`fa ${props.icon}`}></span> : ""}</a>
    )
}