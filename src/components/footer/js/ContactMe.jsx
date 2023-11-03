import React from 'react';
import { translate } from "../../../translation/Translate";

import {
  EmailShareButton,
  LinkedinShareButton,
  EmailIcon,
  LinkedinIcon,
} from 'react-share';
import "../../footer/css/ContactMeStyle.css"; 

const ContactMe = () => {
  const email = 'zguric.alen@hotmail.com';
  const linkedinUrl = "https://www.linkedin.com/in/alen-zguri%C4%87?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTCsmIAcrSVasigaIBOH6%2FA%3D%3D"
    return (
    <div className="contact-me">
      <h2>{translate("contactme", "h2")}</h2>
      <div className="block-contact-info">
        <div className="contact-info">
            <EmailShareButton url={`mailto:${email}`}>
            <EmailIcon size={32} round />
            </EmailShareButton>
            <p>E-mail: <a href={`mailto:${email}`}>{email}</a></p>
        </div>
        <div className="contact-info">
            <LinkedinShareButton url={linkedinUrl}>
            <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <p>
            LinkedIn: <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                {translate("contactme", "p1")}
            </a>
            </p>
        </div>
      </div>
      
    </div>
  );
};

export default ContactMe;
