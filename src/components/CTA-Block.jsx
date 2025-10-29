import Button from '../components/Button.jsx';

export default function CTA({title = "Lass uns zusammenarbeiten", link = "/kontakt", buttonText = "Zum Kontakt"}) {
    return (
        <div className="cta">
            <h2>{title}</h2>
            <Button buttonLink={link} buttonContent={buttonText} />
        </div>
    )
}