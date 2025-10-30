import './Button.css';

export default function Button(props) {

    function buttonHoverIn(e) {
        e.currentTarget.classList.add("hoverIn");
    }

    function buttonHoverOut(e) {
        const el = e.currentTarget;
            el.classList.remove("hoverIn");
            el.classList.add("hoverOut");
            setTimeout(() => {
                el.style.transition = "none"
                el.classList.remove("hoverOut")
                setTimeout(() => {
                    el.style.transition = "300ms ease-in"
                }, 1);
            }, 300);
    }

    return (
        <a 
        className={"button"} 
        href={props.buttonLink} 
        target={props.newTab ? "_blank" : "_self"}
        onMouseEnter={buttonHoverIn}
        onMouseLeave={buttonHoverOut}
        >
            {props.buttonContent} {props.icon ? <span className={`fa ${props.icon}`}></span> : ""}
        </a>
    )
}