import { useState } from "react";
import chevron from '../../assets/icon/chevron.svg';
import PropTypes from 'prop-types';
import './Dropdown.css'


function Dropdown({ heading, content }) {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => setToggle(!toggle,);

    return (
        <div className="dropdownWrapper">
          <div onClick={toggleState}
            className="dropdownHeader"
            >
            <h2 className="dropdownTitle">{heading}</h2>
            <img className="chevron" onClick={toggleState} src={chevron} alt="" />

          { toggle && (
          <img className="clickedChevron" src={chevron} alt="" aria-hidden={toggle ? "true" : "false"} >
          </img>)}
          </div> 

          {toggle && (
          <div className="dropdownContent" aria-hidden={toggle ? "true" : "false"}>
            {
              Array.isArray(content) ? (
                <ul>
                    {
                    content.map((elLi, index) => {
                    return <li key={`${elLi}-${index}`}>{elLi}</li>;
                    })}
                  </ul>
              ) : (<p>{content}</p>)
            }
          </div>)}
    </div>
  );
}

Dropdown.propTypes = {
    heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
    content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}

Dropdown.defaultProps = {
  heading: '',
  content: '',
}

export default Dropdown;
