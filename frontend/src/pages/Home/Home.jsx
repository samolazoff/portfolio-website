import {NavLink, Link} from 'react-router';
import {useSelector} from 'react-redux';

import page from '/ChatGPT.png';

import './Home.scss';

import dataTXT from '../../data/language.json';

const Home = () => {

    const language = useSelector((state) => state.language.language);
    const txt = (language === 'EN') ? dataTXT.EU.startPage : dataTXT.RU.startPage;
    const {title, subtitle, descript, btnSkills, btnWorks, forAbout, forBlog, forPrj} = txt;

    return (
        <section className='container home-page'>
            <div className="home-page-box-start">
                <div className="home-page-txt-box">
                    <h2 className="title-block">{title}</h2>
                    <span className="home-page__subtitle">{subtitle}</span>
                    <span className="home-page__txt">{descript}</span>
                    <div className="home-page-btn-box">
                        <NavLink className='btn btn__main' to={'/about'}>{btnSkills}</NavLink>
                        <NavLink className='btn btn__important' to={'/projects'}>{btnWorks}</NavLink>
                    </div>
                </div>
                <img src={page} alt="home-page__img" className="home-page__img" />
            </div>
            <div className="home-page-box">
                <div className="home-page-box-mini">
                    <aside className='mini-about'>
                        <Link to='/about'>
                            <h2 className="title-block">{forAbout.title}</h2>
                        </Link>
                        <span className="home-page__txt">{forAbout.txt}</span>
                    </aside>
                    <aside className='mini-projects'>
                        <Link to='/projects'>
                            <h2 className="title-block">{forPrj.title}</h2>
                        </Link>
                        <span className="home-page__txt">{forPrj.txt}</span>
                    </aside>
                </div>
                <article className="mini-blog">
                    <Link to='/blog'>
                        <h2 className="title-block">{forBlog.title}</h2>
                    </Link>
                    <span className="home-page__txt">{forBlog.txt}</span>
                </article>
            </div>
            
        </section>
    );
};

export default Home;