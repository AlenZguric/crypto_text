import React, {useEffect} from 'react';
import ContactForm from '../components/footer/js/ContactForm';
import PopUp from '../components/header/js/PopUp';


const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <div>
            <PopUp/>
            <ContactForm/>
        </div>
    );
};

export default ContactPage;