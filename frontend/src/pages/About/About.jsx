import './About.scss';

import page from '/ChatGPT.png';

import imgHtml from '../../static/icons/html-5.svg';
import imgJs from '../../static/icons/js.svg';
import imgCss from '../../static/icons/css-3-svgrepo-com.svg';
import imgReact from '../../static/icons/react-svgrepo-com.svg';
import imgNode from '../../static/icons/nodejs-svgrepo-com.svg';
import imgRedux from '../../static/icons/redux-svgrepo-com.svg';
import imgFigma from '../../static/icons/figma-svgrepo-com.svg';
import imgSass from '../../static/icons/sass-svgrepo-com.svg';
import imgPug from '../../static/icons/pug-svgrepo-com.svg';
import imgNpm from '../../static/icons/npm-svgrepo-com.svg';
import imgMongo from '../../static/icons/mongo-svgrepo-com.svg';
import imgBoots from '../../static/icons/bootstrap-svgrepo-com.svg';
import imgTail from '../../static/icons/tailwind-svgrepo-com.svg';
import imgGit from '../../static/icons/git-svgrepo-com.svg';

function itemStack(name, img) {
    return(
        <li className="about-page-skills__item" key={name}>
            <img src={img} alt={name} title={name}/>
        </li>
    )
};

const imgArr = [
        {
            name: 'Html5',
            img: imgHtml
        },
        {
            name: 'CSS3',
            img: imgCss
        },
        {
            name: 'JS',
            img: imgJs
        },
        {
            name: 'ReactJs',
            img: imgReact
        },
        {
            name: 'NodeJs',
            img: imgNode
        },
        {
            name: 'Redux',
            img: imgRedux
        },
        {
            name: 'Figma',
            img: imgFigma
        },
        {
            name: 'Sass',
            img: imgSass
        },
        {
            name: 'Pug',
            img: imgPug
        },
        {
            name: 'npm',
            img: imgNpm
        },
        {
            name: 'MongoDB',
            img: imgMongo
        },
        {
            name: 'Bootstrap',
            img: imgBoots
        },
        {
            name: 'Tailwind',
            img: imgTail
        },
        {
            name: 'Git',
            img: imgGit
        },
];

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
                <ul className="about-page-skills-items">
                    {
                        imgArr.map((item) => {
                            return (
                                itemStack(item.name, item.img)
                            )
                        })
                    }
                </ul>
            </div>
            <div className="about-page-start-box">
                <div className="about-page-start-box-txt">
                    <h3 className='about-page__subtitle'>In the end...</h3>
                    <p className='about-page__txt'>I love clean, simple, elegant pages — with no clutter, just thoughtful design and smooth functionality. I believe in the “less is more” philosophy where everything has a purpose and works beautifully.</p>
                    <p className='about-page__txt'>This site marks the beginning of my new path. I’m open to interesting projects and connections with like-minded developers.</p>
                    <div className="social-panel"></div>
                </div>
                <img src={page} alt="about-page__img" className="about-page__img" />
            </div>
        </section>
    );
};

export default About;