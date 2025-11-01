import Hero from './components/Hero/Hero.jsx'
import ReferenzenBlock from './components/ReferenzenBlock.jsx'
import ServiceBlock from './components/ServiceBlock.jsx'
import HeroImage from './assets/images/musicbg.jpg'
import ContactForm from './components/ContactForm.jsx'

import './styles/about.css'

import portrait from './assets/images/about-image-saschadueser.jpg'


export default function Index() {

    return (
        <>
            <Hero background={HeroImage} headline="Deine Zielgruppe ist online" text="Professionelles Webdesign, mit dem du online gefunden wirst!" button={true} buttonText='Lass dich überzeugen!'/>

            <ServiceBlock />
            
            <ReferenzenBlock />

            <section id='about'>
                <div className='content'>
                    <h2>Über Mich</h2>
                    <div className='about-wrapper'>
                        <p><img className='about-image' src={portrait}/>Ich bin Sascha Düser, Webdesigner aus Westerstede mit Leidenschaft für klare Strukturen, moderne Ästhetik und funktionales Design. Mein Ziel: Websites, die nicht nur gut aussehen, sondern Ergebnisse liefern. Mit durchdachtem Webdesign sorge ich dafür, dass deine Marke online überzeugt – auf jedem Gerät und für jede Zielgruppe. Von der ersten Idee bis zum Launch begleite ich dich persönlich und transparent. So entsteht ein authentischer Online-Auftritt, der Vertrauen schafft und dich sichtbar macht.</p>
                    </div>
                </div>
            </section>

            <ContactForm />

        </>
    ) 
}