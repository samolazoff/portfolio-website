import {NavLink, Link} from 'react-router';

import page from '/ChatGPT.png';

import './Home.scss';

const Home = () => {
    return (
        <section className='container home-page'>
            <div className="home-page-box">
                <div className="home-page-txt-box">
                    <h2 className="title-block">
                        Hi, I'm Raman Samalazau
                    </h2>
                    <span className="home-page__subtitle">Web Developer</span>
                    <span className="home-page__txt">
                        I  specialize in building and designing web applications.
                    </span>
                    <div className="home-page-btn-box">
                        <NavLink className='btn btn__main' to={'/about'}> View My Skills</NavLink>
                        <NavLink className='btn btn__important' to={'/projects'}>View My Work</NavLink>
                    </div>
                </div>
                <img src={page} alt="home-page__img" className="home-page__img" />
            </div>
            <div className="home-page-box">
                <div className="home-page-box-mini">
                    <aside className='mini-about'>
                        <Link to='/about'>
                            <h2 className="title-block">About Me</h2>
                        </Link>
                        <span className="home-page__txt">
                            I  am a web developer with a passion for creating beautiful, resposive and user-friendly websites. I have experience in developing web applications using modern technologies. 
                        </span>
                    </aside>
                    <aside className='mini-projects'>
                        <Link to='/projects'>
                            <h2 className="title-block">Projects</h2>
                        </Link>
                        <span className="home-page__txt">
                            A brief description of projects.
                        </span>
                    </aside>
                </div>
                <article className="mini-blog">
                    <Link to='/blog'>
                        <h2 className="title-block">Blog</h2>
                    </Link>
                    <span className="home-page__txt">
                       Some last posts.
                    </span>
                </article>
            </div>
            
        </section>
    );
};

export default Home;