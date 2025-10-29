import Hero from './components/Hero/Hero.jsx'
import Button from './components/Button/Button.jsx'
import CTA from './components/CTA/CTA-Block.jsx'

import HeroImage from './assets/images/projekt-vorschau-tuseversten.jpg'

import './styles/service-page.css'

export default function Service() {
    return (
        <>
            <Hero background={HeroImage} headline="Hi" text="Meine Leistungen für deine Seite" />

            <section>
                <div className='content'>
                    <h1>Service</h1>
                    <div className='intro-wrapper'>
                        <p>Eine gute Website muss nicht kompliziert sein. Sie soll informieren, Vertrauen schaffen und Ihnen helfen, mehr Kundinnen und Kunden zu gewinnen – ohne dass Sie sich mit Technik herumschlagen müssen. Genau dabei unterstütze ich Sie: von der professionellen Erstellung Ihrer neuen Website über regelmäßige Wartung bis hin zu schneller Hilfe bei Problemen. Ich sorge dafür, dass Ihr Internetauftritt modern, zuverlässig und leicht zu bedienen ist – damit Sie sich ganz auf Ihr Geschäft konzentrieren können.
                        Einfach. Klar. Persönlich. So entsteht Ihre Website, die wirklich zu Ihnen passt.</p>
                    </div>
                    <section className='services'>
                        <div className='service-member'>
                            <div className='service-title'>
                                <div className='fa fa-laptop'></div>
                                <div className='service-titles'>
                                    <h2>Website-Erstellung</h2>
                                    <h3>Von Neu an</h3>
                                </div>
                            </div>
                                <p>Eine Website ist heute oft der erste Eindruck, den potenzielle Kundinnen und Kunden von Ihrem Unternehmen bekommen. Ich unterstütze Sie dabei, diesen Eindruck zu einem positiven Erlebnis zu machen. Gemeinsam gestalten wir Ihre Internetseite so, dass sie zu Ihnen und Ihrem Angebot passt – ansprechend, übersichtlich und leicht zu bedienen. Dabei begleite ich Sie von der ersten Idee bis zur fertigen Veröffentlichung. Sie müssen sich um nichts Technisches kümmern: Ich übernehme Planung, Gestaltung, Einrichtung und alles, was dazugehört. So entsteht eine moderne Website, die Ihre Zielgruppe anspricht und Ihr Unternehmen optimal präsentiert – ganz ohne komplizierte Fachbegriffe oder versteckte Kosten.</p>                        
                        </div>
                        <div className='service-member'>
                            <div className='service-title'>
                                <div className='fa fa-gears'></div>
                                <div className='service-titles'>
                                    <h2>Wartung</h2>
                                    <h3>Stetige Kontrolle, Updates, Backups</h3>
                                </div>
                            </div>
                            <p>Damit Ihre Website dauerhaft zuverlässig funktioniert, ist regelmäßige Pflege wichtig. Ich übernehme diese Aufgabe gerne für Sie. Das bedeutet: Ich halte Ihre Seite technisch auf dem neuesten Stand, spiele notwendige Aktualisierungen ein und überprüfe regelmäßig, ob alles reibungslos läuft. Auch inhaltliche Änderungen – neue Texte, Bilder oder geänderte Öffnungszeiten – können Sie mir einfach mitteilen, ich kümmere mich darum. So bleibt Ihre Website aktuell und sicher, ohne dass Sie sich mit den Hintergründen beschäftigen müssen. Sie können sich voll auf Ihr Tagesgeschäft konzentrieren, während ich im Hintergrund dafür sorge, dass online alles rund läuft.</p>
                        </div>
                        <div className='service-member'>
                            <div className='service-title'>
                                <div className='fa fa-gauge-simple-high'></div>
                                <div className='service-titles'>
                                    <h2>Optimierung</h2>
                                    <h3>Performance steigern, Sichtbarkeit verbessern</h3>
                                </div>
                            </div>
                            <p>Vielleicht haben Sie bereits eine Website, sind aber mit der Wirkung oder den Ergebnissen nicht ganz zufrieden. In diesem Fall biete ich eine gründliche Überprüfung und Optimierung an. Ich analysiere, wie Ihre Seite aufgebaut ist, wie schnell sie lädt und wie sie von Ihren Besuchern wahrgenommen wird. Anschließend schlage ich konkrete Verbesserungen vor – etwa bei der Struktur, der Darstellung auf mobilen Geräten oder der Verständlichkeit Ihrer Inhalte. Ziel ist es, dass Ihre Website einfacher, schneller und überzeugender wird. Kleine Anpassungen können oft schon einen großen Unterschied machen, damit Ihre Seite wieder so funktioniert, wie sie sollte.</p>
                        </div>
                        <div className='service-member'>
                            <div className='service-title'>
                                <div className='fa fa-handshake'></div>
                                <div className='service-titles'>
                                    <h2>Support</h2>
                                    <h3>Unterstützung bei aktuen Beschwerden</h3>
                                </div>
                            </div>
                            <p>Wenn auf Ihrer Website etwas nicht funktioniert, ist schnelle und unkomplizierte Hilfe gefragt. Genau das biete ich Ihnen: persönlichen Support ohne Fachchinesisch. Egal, ob sich eine Seite nicht richtig öffnet, ein Formular streikt oder etwas plötzlich anders aussieht – Sie melden sich einfach bei mir, und ich kümmere mich darum. Ich erkläre Ihnen, was passiert ist, und finde eine verständliche Lösung, die wirklich hilft. Oft lassen sich viele Probleme schon innerhalb kurzer Zeit beheben. So haben Sie immer die Sicherheit, dass im Hintergrund jemand da ist, der sich kümmert, wenn es einmal hakt.</p>
                        </div>
                    </section>
                    <CTA title="Du brauchst Unterstützung?" />
                </div>
            </section>
        </>
    )
}