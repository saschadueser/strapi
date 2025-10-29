import { useState } from 'react';
import ContactOptionsBlock from '../components/ContactOptionsBlock.jsx'
import '../styles/kontakt.css'

export default function ContactForm() {

    const [validFormElements, setValidFormElements] = useState({
        name: false,
        mail: false,
        phone: false,
        message: false
    })
    
    function checkFormElement(e) {
        if(!e.target.checkValidity()) {
            e.target.classList.add("invalid");
            setValidFormElements( prev => {
                return {...prev, [`${e.target.name}`]:false}
            })
        } else {
            e.target.classList.remove("invalid");
            setValidFormElements( prev => {
                return {...prev, [`${e.target.name}`]:true}
            })
        }
    }

    // Later function for checking all formFields
    /*
    function test() {
        const checkArray = [];
        for(let x in validFormElements) {
            checkArray.push(validFormElements[x])
        }

        if(checkArray.indexOf(false) === -1) {
            console.log("Alles ok")
        } else {
            console.log("Da stimmt was nicht")
        }
    }
        */


    return (
        <>
            <section id="kontakt">
                <div className='content'>
                    <h2>Kontakt</h2>
                    <div className='kontakt-wrapper'>
                        <form action="">
                            <div className='form-item'>
                                <label htmlFor="name">Name*</label>
                                <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                required 
                                pattern="^[A-Za-zÀ-ÖØ-öø-ÿĀ-žẞßŸ' -]{2,}$" 
                                minLength={3} 
                                placeholder="Dein Name (Nur Buchstaben)"
                                onChange={checkFormElement}
                                />
                            </div>
                            <div className='form-item'>
                                <label htmlFor="mail">Mail-Adresse*</label>
                                <input 
                                type="email" 
                                name="mail" 
                                id="mail" 
                                required 
                                pattern="^[^@\s]+@[^@\s]+\.[A-Za-z]{2,}$" 
                                placeholder="Deine Mail-Adresse (Im Format 'max@mustermann.de')" 
                                onChange={checkFormElement}
                                />
                            </div>
                            <div className='form-item'>
                                <label htmlFor="phone">Telefon</label>
                                <input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                pattern="^[0-9]+(?: [0-9]+)*$" 
                                placeholder="Deine Rufnummer (Nur Zahlen)" 
                                minLength={7}
                                onChange={checkFormElement}
                                />
                            </div>
                            <div className='form-item'>
                                <label htmlFor="message">Nachricht*</label>
                                <textarea 
                                name="message" 
                                id="message" 
                                rows={10} 
                                minLength={75} 
                                required 
                                placeholder="Deine Nachricht an mich (mind. 75 Zeichen erforderlich)"
                                onChange={checkFormElement}
                                ></textarea>
                            </div>
                            <div className='form-item'>
                                <label htmlFor="datenschutzcheck"><input type="checkbox" id="datenschutzcheck" required/>
                                Mit Klick bestätigst du, die Datenschutzerklärung zum Kontaktformular gelesen und akzeptiert zu haben. Damit stimmst du der Verarbeitung deiner Daten zum Zweck der Kontaktaufnahme zu. Die Einwilligung kannst du jederzeit widerrufen.
                                </label>
                            </div>
                            <div className='form-item'>
                                <input type="submit" 
                                value="Absenden"
                                />
                            </div>
                            <div className='form-hints'>
                                <p><em>Die mit einem Stern (*) gekennzeichneten Felder sind erforderlich, um deine Anfrage ordnungsgemäß bearbeiten bzw. beantworten zu können.</em></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>

    )
}