import './Projects.scss';

import imgAQ from '../../static/img/lambent-lamington-7af7b0.netlify.app_.png';

const dataPrj = [
    {
        link : 'https://lambent-lamington-7af7b0.netlify.app/',
        img: imgAQ,
        txt : {
            RU : {
                name : 'ООО "Альфа Квалитет"',
                description : 'Этот веб сайт для компании ООО "Альфа Квалитет" город Минск, Беларусь',
            },
            EN : {
                name : 'Alfa Qualetet',
                description : 'This is a Web-site for company "Alfa Qualetet" from Minsk, Belarus'
            }
        }
    },
    {
        link : 'https://lambent-lamington-7af7b0.netlify.app/',
        img: imgAQ,
        txt : {
            RU : {
                name : 'ООО "Альфа Квалитет"',
                description : 'Этот веб сайт для компании ООО "Альфа Квалитет" город Минск, Беларусь',
            },
            EN : {
                name : 'Alfa Qualetet',
                description : 'This is a Web-site for company "Alfa Qualetet" from Minsk, Belarus'
            }
        }
    }
];

const Projects = () => {
    return (
        <section className = 'container page-projects'>
            <h2 className="title-block">Projects</h2>
            <ul className="page-projects-items">
                {
                    dataPrj.map((item, index) => {

                        const {img, txt, link} = item;

                        return (
                            <li className = 'page-projects-item' key = {index}>
                                <a href = {link}>
                                    <img src = {img} alt = "img" className = 'page-projects-item__img'/>
                                </a>
                                <div className="page-projects-item-box-txt">
                                    <h4 className="page-projects-item__title">{txt.EN.name}</h4>
                                    <p className="page-projects-item__txt">{txt.EN.description}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Projects;