import './Contacts.scss';

import SocialMedia from '../../components/SocialMedia/SocialMedia';
import ContactMe from '../../components/ContactMe/ContactMe';

const Contacts = () => {
    return (
        <section className = 'page-contacts container'>
            <h2 className = "title-block" >Contacts</h2>
            <div className = "page-contacts-wrap">
                <div className = "contacts-box-txt">
                    <table>
                        <caption>My contacts</caption>
                        <tbody>
                            <tr>
                                <td className = 'main-txt'>email</td>
                                <td>samolazov.roman.alex@gmail.com</td>
                            </tr>
                            <tr>
                                 <td className = 'main-txt'>mobile</td>
                                <td>+375445576259</td>
                            </tr>
                            <tr>
                                 <td className = 'main-txt'>telegram</td>
                                <td>+375445576259</td>
                            </tr>
                            <tr>
                                <td className = 'main-txt'>watsapp</td>
                                <td>+375445576259</td>
                            </tr>
                            <tr>
                                <td className = 'main-txt'> viber</td>
                                <td>+375445576259</td>
                            </tr>
                        </tbody>
                    </table>
                    <SocialMedia/>
                </div>
                <ContactMe/>
            </div>
        </section>
    );
};

export default Contacts;