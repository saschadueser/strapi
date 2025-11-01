import './Hero.css';

import Button from '../Button/Button.jsx'

export default function Hero({background, headline, text, button = false, buttonText = "Hier klicken"}) {
    return (
            <div id="hero" style={{backgroundImage: `url(${background})`}}>
                <div className='content'>
                    <h1>{headline}</h1>
                    <p>{text}</p>
                    {button ? <Button buttonContent={buttonText} /> : ""}
                    
                </div>
            </div>
    )
}