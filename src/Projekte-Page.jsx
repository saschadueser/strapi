import Hero from './components/Hero/Hero.jsx';
import CTA from './components/CTA-Block';

import heroBG from './assets/images/projekt-vorschau-nightlifeevents.jpg';

import NightlifeEventsVorschau from './assets/images/projekt-vorschau-nightlifeevents.jpg';
import TusEverstenVorschau from './assets/images/projekt-vorschau-tuseversten.jpg';
import TtcOldenburgVorschau from './assets/images/projekt-vorschau-ttc.jpg';


import './styles/projekte-page.css'

export default function Referenzen() {
    return (
        <>
            <Hero background={heroBG} headline="Meine Arbeit" text="Lass dich überzeugen"/>

            <section>
                <div className='content'>
                    <div className='intro'>
                        <h1>Referenzen</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt doloribus molestias illo voluptas porro ipsum sint consectetur quibusdam, sapiente quam corporis architecto voluptatibus, provident esse?</p>
                    </div>
                    <section className='projekte'>
                        <div className='projekt-item'>
                            <div className='projekt-head'>
                                <h2>Website für Kroatien Partyurlaub</h2>
                            </div>
                            <div className='projekt-body'>
                                <div className='projekt-bg' style={{background: `url(${NightlifeEventsVorschau})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
                                <div className='projekt-beschreibung'>
                                    <p>Nightlife Events aus Wilhelmshaven wollte seinen Gästen etwas ganz Besonderes bieten: einen <strong>Online-Auftritt</strong> für den 
                                        geplanten Kroatien-Partyurlaub. Das Buchungsformular gab es schon – es fehlte nur noch die passende <strong>Website</strong> dazu.</p>

                                    <p>In enger Abstimmung mit dem Team von Nightlife Events habe ich eine <strong>moderne, responsive Website</strong> entwickelt, <strong>die auf allen Geräten perfekt funktioniert.</strong> 
                                    Basis war WordPress mit einem hochwertigen Premium-Theme, das ich individuell angepasst habe – Schritt für Schritt, bis alles genau so aussah und funktionierte, 
                                    wie es sollte. </p>

                                    <p>Das Ergebnis: eine <strong>benutzerfreundliche Website</strong>, die Lust auf Urlaub macht und den Gästen das Buchen so einfach wie möglich 
                                        macht.</p>

                                    <p>Website-Link: <a href="https://nightlifeevents.eu" target='_blank'>https://nightlifeevents.eu</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='projekt-item'>
                            <div className='projekt-head'>
                                <h2>Website Neugestaltung für Sportverein</h2>
                            </div>
                            <div className='projekt-body'>
                                <div className='projekt-bg' style={{background: `url(${TusEverstenVorschau})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
                                <div className='projekt-beschreibung'>
                                    <p>Der TuS Eversten aus Oldenburg wollte seine <strong>Online-Präsenz modernisieren</strong>. Die alte Website war in die Jahre gekommen – 
                                        Zeit für frischen Wind! Ziel war es, das vertraute Design beizubehalten, aber trotzdem etwas Neues zu schaffen, 
                                        das besser zu einem aktiven, modernen Sportverein passt.</p>

                                    <p>Ich habe auf Basis von WordPress und einem passenden Theme eine komplett neue Website aufgebaut, die sich optisch am alten Design orientiert, 
                                    aber <strong>technisch und gestalterisch auf dem neuesten Stand</strong> ist. Alle bestehenden Beiträge und Inhalte wurden sorgfältig übernommen, damit nichts verloren geht.</p>

                                    <p>Nach der Fertigstellung durfte ich die neue Website kurz präsentieren – und sie hat sofort überzeugt. Jetzt zeigt sich der TuS Eversten wieder so, 
                                    wie er ist: engagiert, sportlich und mit einem klaren, modernen Auftritt im Netz.</p>

                                    <p>Website-Link: <a href="https://tus-eversten.de" target='_blank'>https://tus-eversten.de</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='projekt-item'>
                            <div className='projekt-head'>
                                <h2>Website Neugestaltung für Tischtennis-Club</h2>
                            </div>
                            <div className='projekt-body'>
                                <div className='projekt-bg' style={{background: `url(${TtcOldenburgVorschau})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
                                <div className='projekt-beschreibung'>
                                    <p>Auch der TTC Oldenburg wollte seiner Website ein modernes Gesicht geben. Die alte Seite erfüllte ihren Zweck, war aber technisch und optisch 
                                        nicht mehr auf dem neuesten Stand. Ziel war es, den Online-Auftritt zu überarbeiten, ohne den Wiedererkennungswert zu verlieren.</p>

                                    <p>Auf Basis von WordPress und einem passenden Theme habe ich die Website neu gestaltet und dabei Wert auf Übersichtlichkeit, einfache 
                                    Bedienung und ein frisches, sportliches Design gelegt. Bestehende Inhalte wurden übernommen und sorgfältig eingebunden, sodass alle 
                                    wichtigen Informationen weiterhin leicht zu finden sind.</p>

                                    <p>Nach der Neugestaltung präsentiert sich der TTC Oldenburg jetzt zeitgemäß, klar strukturiert und mit einer Website, die den 
                                    Verein und seine Mitglieder perfekt repräsentiert.</p>
                                    <p>Website-Link: <a href="https://ttc-oldenburg.de" target='_blank'>https://ttc-oldenburg.de</a></p>

                                </div>
                            </div>
                        </div>
                    </section>

                    <CTA />

                </div>
            </section>
        </>
    )
}