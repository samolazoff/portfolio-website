import {NavLink} from 'react-router';

import page from '/ChatGPT.png';

import './Home.scss';

const Home = () => {
    return (
        <section className='container home-page'>
            <div className="home-page-txt-box">
                <h2 className="home-page__title">
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
        </section>
    );
};

export default Home;