import { useState } from "react";
import chevron from '../../assets/icon/chevron.svg';
// import styled from 'styled-components'
// import PropTypes from 'prop-types';
import './Dropdown.css'

// const DropdownWrapper = styled.section`
//     padding-bottom: 20px;
//       @media screen and (min-width: 991px) {
//         padding-bottom: 20px;
//       }
// `
// const DropdownHeading = styled.div`
//     position: relative;
//     height: 29.93px;
//     background-color: #ff6060;
//     color: white;
//     cursor: pointer;
//     border-radius: 5px;
//       @media screen and (min-width: 991px) {
//         height: 52px;
//         border-radius: 10px;
//       }
// `
// const DropdownHeader = styled.h2`
//     display: flex;
//     align-items: center;
//     margin: 0px;
//     font-size: 13px;
//     font-weight: 500;
//     padding-top: 5.48px;
//     padding-left: 12px;
//       @media screen and (min-width: 991px) {
//         font-weight: 500;
//         font-size: 18px;
//         padding-top: 13px;
//         padding-left: 19px;
//       }
// `
// const Chevron = styled.img`
//     position: absolute;
//     align-items: center;
//     // pointer-events: none;
//     width: 15.2px;
//     height: 8.96px;
//     right: 14.39px;
//     top: 10.24px;
//     transform: rotate(-180deg);
//       @media screen and (min-width: 991px) {
//         width: 26.4px
//         height: 15.56px
//         right: 25px;
//         top: 17.79px;
//       }
// `
// const ClickedChevron = styled.img`
// position: absolute;
//     align-items: center;
//     // pointer-events: none;
//     width: 15.2px;
//     height: 8.96px;
//     right: 14.39px;
//     top: 10.24px;
//     background-color: #ff6060;
//       @media screen and (min-width: 991px) {
//         width: 26.4px
//         height: 15.56px
//         right: 25px;
//         top: 17.79px;
//         background-color: #ff6060;
//     }
//     &:active {
//     transform: rotate(0deg);
//     transition: transform 0.2s ease-in-out;
//     }
// }
// `
// const DropdownContent = styled.div`
//     position: relative;
//     top: -10px;
//     background-color: #f6f6f6;
//     color: #ff6060;
//     border-radius: 10px;
//     z-index: -2;
//     p {
//     font-size: 12px;
//     font-weight: 400;
//     margin: 0px;
//     padding: 23.02px 6.91px 1.3px 11.51px;
//       @media screen and (min-width: 991px) {
//         font-size: 18px;
//         margin: 0px;
//         padding: 40px 12px 53px 20px;
//       }
//     }
//     ul {
//       list-style: none;
//       font-size: 12px;
//       font-weight: 400;
//       margin: 0px;
//       padding: 23.02px 6.91px 1.3px 11.51px;
//         @media screen and (min-width: 991px) {
//           font-size: 18px;
//           padding: 40px 12px 53px 20px;
//         }
//     }
//     li {
//         Line-height: 17.11px;
//         margin: 0px;
//           @media screen and (min-width: 991px) {
//             Line height: 25.67px; 
//           }
//     }
// `

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

// Dropdown.propTypes = {
//     heading: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.array,
//   ]),
//     content: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.array,
//   ]),
// }

// Dropdown.defaultProps = {
//   heading: '',
//   content: '',
// }

export default Dropdown;
