import Hero from './components/Hero/Hero.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactOptions from './components/Contact-Options-Block/ContactOptionsBlock.jsx';

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