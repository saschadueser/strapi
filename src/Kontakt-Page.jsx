import Hero from './components/Hero/Hero.jsx';
import ContactForm from './components/ContactForm';
import ContactOptions from './components/ContactOptionsBlock';

import backgroundImage from './assets/images/musicbg.jpg'

export default function Kontakt() {
    return (
        <>
        <Hero headline="Kontakt" text="Schreib mir" background={backgroundImage}/>

            <ContactForm />
            <ContactOptions />

        </>
    )
}