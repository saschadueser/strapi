import Hero from './components/Hero.jsx'

import './styles/blog.css'

export default function Blog() {
    return (
        <>
        <Hero background="" headline="Beiträge" text="Tipps, Tricks, Neues" />
            <section id="blog">
                <div className="content">
                    <div className="blog-wrapper">
                        <div className='blog-entry'>
                            <div className='blog-entry-preview-image'></div>
                            <div className='blog-entry-preview-content'>
                                <h3>Example for Blog Post</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem aut rerum placeat consequatur tenetur....</p>
                            </div>
                        </div>
                        <div className='blog-entry'>
                            <div className='blog-entry-preview-image'></div>
                            <div className='blog-entry-preview-content'>
                                <h3>Example for Blog Post</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem aut rerum placeat consequatur tenetur....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}