import Hero from './components/Hero'
import ReferenzenBlock from './components/ReferenzenBlock.jsx'
import ServiceBlock from './components/ServiceBlock.jsx'
import HeroImage from './assets/images/musicbg.jpg'
import ContactForm from './components/ContactForm.jsx'

import './styles/about.css'

import portrait from './assets/images/about-image-saschadueser.jpg'


export default function Index() {

    return (
        <>
            <Hero background={HeroImage} headline="Deine Zielgruppe ist online" text="Ich unterstütze dich gefunden zu werden!" button={true} buttonText='Lass dich überzeugen!'/>

            <ServiceBlock />
            
            <ReferenzenBlock />

            <section id='about'>
                <div className='content'>
                    <h2>Über Mich</h2>
                    <div className='about-wrapper'>
                        <p><img className='about-image' src={portrait}/>Just Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate omnis placeat itaque culpa corporis sapiente quod voluptatibus sit veritatis ipsum ipsa expedita, harum animi illo quis suscipit iusto dolore. Voluptatum adipisci voluptates eveniet veniam illum a sint perspiciatis dignissimos nobis ex aliquam ipsam rerum pariatur labore corrupti vero rem tempore culpa, repellat beatae! Distinctio veritatis modi consequatur eaque molestiae nesciunt magni neque dignissimos laboriosam nemo quidem, ipsam atque id quaerat exercitationem aspernatur officia error mollitia eligendi eius voluptate. Vero, iure mollitia ad illum officiis adipisci pariatur magni, recusandae architecto sunt at itaque! Quos sint laudantium accusamus expedita suscipit nemo!</p>
                    </div>
                </div>
            </section>

            <ContactForm />

        </>
    ) 
}