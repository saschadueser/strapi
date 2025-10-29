

import '../styles/service.css'

import Button from '../components/Button'

// Erstellung, Wartung, Optimierung, Support



export default function ServiceBlock() {

   


    return (
        <section id="service">
            <div className='content'>
                <h2>Leistungen</h2>
                <div className='service-wrapper'>
                    <div className='service-item'>
                        <div className='fa fa-laptop'></div>
                        <h3>Neue Website</h3>
                        <p>Individuell designte Websites – modern, funktional und perfekt auf dein Business abgestimmt.</p>
                    </div>
                    <div className='service-item'>
                        <div className='fa fa-gear'></div>
                        <h3>Wartung</h3>
                        <p>Regelmäßige Updates, Backups und technische Betreuung – damit deine Website dauerhaft und zuverlässig läuft.</p>
                    </div>
                    <div className='service-item'>
                        <div className='fa fa-search'></div>
                        <h3>Optimierung</h3>
                        <p>Bessere Ladezeiten einer bestehenden Seite</p>
                    </div>
                    <div className='service-item'>
                        <div className='fa fa-pen'></div>
                        <h3>Support</h3>
                        <p>Bei akuten Probleme mit der bestehenden Seite</p>
                    </div>
                </div>
                <Button buttonContent="Mehr zu meinen Leistungen" buttonLink="/leistungen" icon="fa-arrow-right"/>
            </div>
        </section>

    )
}