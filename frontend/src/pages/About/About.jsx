import './About.scss';

import page from '/ChatGPT.png';

const About = () => {

    return (
        <section className='about-page container'>
            <div className="about-page-start-box">
                <div className="about-page-start-box-txt">
                    <h2 className='title-block'>About Me</h2>
                    <h3 className='about-page__subtitle'>Hi there! I'm Roman, web developer.</h3>
                    <p className='about-page__txt'>I started building websites back in 2012, just for fun. It was a hobby at first — learning HTML, writing scripts late at night, experimenting with layouts. Today, I’ve decided to make it my main profession. For me, web development is more than just code — it’s a way to create something real and meaningful.</p>
                    <p className='about-page__txt'>My main stack is MERN (MongoDB, Express, React, Node.js), but I’m always learning and growing. Lately, I’ve been diving into Next.js and exploring PHP. Honestly, I’m curious about everything — backend, frontend, UI, performance — the whole journey excites me.</p>
                </div>
                <img src={page} alt="about-page__img" className="about-page__img" />
            </div>
            <div className="about-page-skills">
                <h3 className='about-page__subtitle'>My Skills</h3>
                <div className="about-page-skills-wrap">
                    
                </div>
            </div>
            <p className='about-page__txt'>I love clean, simple, elegant pages — with no clutter, just thoughtful design and smooth functionality. I believe in the “less is more” philosophy where everything has a purpose and works beautifully.</p>
            <p className='about-page__txt'>This site marks the beginning of my new path. I’m open to interesting projects and connections with like-minded developers.</p>
            <div className="social-panel"></div>
        </section>
    );
};

export default About;