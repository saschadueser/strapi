import { useState } from "react";  
import './referenzen.css';

import nightlifeLogo from '../../assets/images/logo-nightlifeevents.png'
import tusLogo from '../../assets/images/logo-tus.png'
import ttcLogo from '../../assets/images/logo-ttc.png'

import nightlifePreview from '../../assets/images/projekt-vorschau-nightlifeevents.jpg';
import tusPreview from '../../assets/images/projekt-vorschau-tuseversten.jpg';
import ttcPreview from '../../assets/images/projekt-vorschau-ttc.jpg';

import Button from '../Button/Button.jsx'
            
export default function ReferenzenBlock() {

    const [activeRefItem, setActiveRefItem] = useState(0)
    const [activeRefBG, setActiveRefBG] = useState(nightlifePreview);

    return (
        <section id='referenzen'> 
            <div className="content">
                <h2>Letzte Projekte</h2>
                <div className="referenzen-wrapper">
                    <div className='ref-prev' style={{backgroundImage: `url(${activeRefBG})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
                    <div className='ref-desc-area'>
                        <div className='ref-logos'>
                            <div onClick={ () => {
                                setActiveRefItem(0);
                                setActiveRefBG(nightlifePreview);
                                }}
                                style={{backgroundImage: `url(${nightlifeLogo})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
                            <div onClick={ () => {
                                setActiveRefItem(1)  
                                setActiveRefBG(tusPreview)                          
                            }} 
                            style={{backgroundImage: `url(${tusLogo})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
                            <div onClick={ () => {
                                setActiveRefItem(2)
                                setActiveRefBG(ttcPreview)
                            }} style={{backgroundImage: `url(${ttcLogo})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
                        </div>
                        <div className='ref-desc' style={{transform: `translateX(-${activeRefItem * 100}%)`}}>
                            <div className='ref-desc-item'>
                                <div className="ref-description">
                                    <h3>Nightlife Events</h3>
                                    <p>Für den Wilhelmshavener Reiseveranstalter <strong>Nightlife Events</strong> habe ich eine Website erstellt, die den ultimativen Partyurlaub in Kroatien erlebbar macht.</p>
                                    <p>Mit modernem Design, klarer Struktur und großen Bildern habe ich die Energie, den Spaß und die unvergesslichen Nächte direkt auf die Seite gebracht. 
                                        Das responsive Layout sorgt dafür, dass Buchungen auf Smartphone, Tablet oder Desktop einfach und schnell gehen. 
                                        So kann der Veranstalter seine Angebote optimal präsentieren und Partyliebhaber direkt für Kroatien begeistern.</p>
                                    <p><a href="https://nightlifeevents.eu" target="_blank">Website von Nightlifeevents besuchen <span className="fa fa-external-link"></span></a></p>
                                </div>
                            </div>
                            <div className='ref-desc-item'>
                                <div className="ref-description">
                                    <h3>TuS Eversten</h3>
                            <p>Für den Oldenburger Sportverein TuS Eversten habe ich die Website komplett neu gestaltet. </p>
                                <p>Die alte Seite war stark veraltet, deshalb habe ich ein modernes, übersichtliches Design entwickelt, 
                                das sich an den bisherigen Vereinsfarben orientiert. </p>
                                <p>Ziel war es, die Inhalte klar zu strukturieren, 
                                die Aktivitäten des Vereins ansprechend zu präsentieren und den Besuchern eine einfache Navigation zu ermöglichen – 
                                egal ob auf Smartphone, Tablet oder Desktop. So kann der Verein seine Angebote, Termine und Neuigkeiten 
                                jetzt zeitgemäß präsentieren und Mitglieder sowie Interessierte optimal informieren.</p>
                                <p><a href="https://tus-eversten.de" target="_blank">Website vom TuS Eversten besuchen <span className="fa fa-external-link"></span></a></p>
                            
                                </div>
                            </div>
                            <div className='ref-desc-item'>
                                <div className="ref-description">
                                    <h3>TTC Oldenburg</h3>
                            <p>Für einen Tischtennis-Verein habe ich die bestehende Website mit einem neuen WordPress-Theme neu aufgesetzt. </p>
                                
                                <p>Dabei habe ich das vorhandene Design übernommen und modernisiert, Inhalte strukturiert und angepasst, sodass 
                                Trainingszeiten, Turniere und Vereinsaktivitäten klar und ansprechend präsentiert werden. 
                                Das responsive Layout sorgt dafür, dass die Seite auf Smartphone, Tablet und Desktop optimal funktioniert. 
                                So kann der Verein seine Mitglieder informieren, neue Interessierte gewinnen und die Begeisterung für Tischtennis 
                                professionell online zeigen.</p>
                            <p><a href="https://ttc-oldenburg.de" target="_blank">Website vom TTC Oldenburg besuchen <span className="fa fa-external-link"></span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button buttonContent="Mehr Projekte sehen"/>
            </div>
        </section>
    )
} 
            
