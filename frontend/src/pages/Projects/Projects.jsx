import './Projects.scss';

const dataPrj = [
    {
        title: 'Alfa Qualetet',
        link : 'https://lambent-lamington-7af7b0.netlify.app/',
        category : 'lending',
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

                        const {category, txt, link, title} = item;

                        return (
                            <li className = 'page-projects-item' key = {index}>
                                <a href = {link} className="page-projects-item-box">
                                    <iframe 
                                        src={link}
                                        title = {title} 
                                        loading="lazy"
                                        allowfullscreen
                                        >
                                    </iframe>
                                    <div className="page-projects-item-box-txt">
                                        <h4 className="page-projects-item-box-txt__title">{txt.EN.name}</h4>
                                        <p className="page-projects-item-box-txt__txt">{txt.EN.description}</p>
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Projects;