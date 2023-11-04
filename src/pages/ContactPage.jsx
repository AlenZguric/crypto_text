import React, {useEffect} from 'react';
import ContactForm from '../components/footer/js/ContactForm';
import PopUp from '../components/header/js/PopUp';
import "../pages/css/ContackPageStyle.css";
import CopyRight from "../components/footer/js/CopyRight";
import PageTitle from "../components/header/js/PageTitle"



const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <div className='contact-page'>
            <PageTitle title={'Contact'}/>
            <PopUp/>
            <ContactForm/>
            <footer>
            <CopyRight/>
            </footer>
        </div>
    );
};

export default ContactPage;