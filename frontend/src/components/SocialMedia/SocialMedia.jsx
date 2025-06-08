import './SocialMedia.scss';

import {Link} from 'react-router';

import gitSvg from '../../static/icons/github.svg';
import lnSvg from '../../static/icons/linkedin.svg';
import instSvg from '../../static/icons/instagram.svg';
import vkSvg from '../../static/icons/vk-svgrepo-com.svg';
import fac from '../../static/icons/facebook-color-svgrepo-com.svg';

const SocialMedia = () => {

    const dataSvg = [
        {
            svg: gitSvg,
            link: 'https://github.com/samolazoff'
        },
        {
            svg: lnSvg,
            link: 'https://www.linkedin.com/in/raman-samalazau-a191a9285/'
        }, 
        {
            svg: instSvg,
            link: 'https://www.instagram.com/'
        }, 
        {
            svg: vkSvg,
            link: 'https://vk.com/'
        },
        {
            svg: fac,
            link: 'https://www.facebook.com/'
        }
    ];

    return (
        <ul className='social-media'>
            {
                dataSvg.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>
                            <img src={item.svg} alt="svg" />
                        </Link>
                    </li>
                    
                ))
            }
        </ul>
    );
};

export default SocialMedia;