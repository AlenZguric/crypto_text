import "../css/UseTechnologyStyle.css";
import html5Image from"../../../images/html5.png";
import css3Image from "../../../images/css3.png";
import sassImage from "../../../images/sass.png";
import jsImage from "../../../images/js.png";
import reactImage from "../../../images/react.png";
import { translate } from "../../../translation/Translate";


function UseTechnology ()  {

  return (
    <div className='use_technology'>
        <div className="title">
            <h2>{translate("usetechnology", "h2")}</h2>
        </div>
        <div className="icons">
            <img src={html5Image} alt="HTML5 ikona" />
            <img src={css3Image} alt="CSS3 ikona" />
            <img src={sassImage} alt="SASS ikona" />
            <img src={jsImage} alt="JAVASCRIPT ikona" />
            <img src={reactImage} alt="REACT ikona" />            
        </div>      
    </div>
  );
};

export default UseTechnology;
