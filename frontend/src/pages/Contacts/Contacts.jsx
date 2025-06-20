import './Contacts.scss';

import SocialMedia from '../../components/SocialMedia/SocialMedia';
import ContactMe from '../../components/ContactMe/ContactMe';

const Contacts = () => {
    return (
        <section className = 'page-contacts container'>
            <h2 className="title-block">Contacts</h2>
            <div className="page-contacts-wrap">
                <div className="contacts-box-txt">
                    <SocialMedia/>
                </div>
                <ContactMe/>
            </div>
        </section>
    );
};

export default Contacts;