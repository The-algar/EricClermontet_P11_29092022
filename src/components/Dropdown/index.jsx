import './Dropdown.css';
import chevron from '../../assets/icon/chevron.svg';

function Dropdown({ heading, content }) {

    // fait apparaitre/disparaitre contenu du dropdown + rotation chevron 
    function toggleDropdown(nodeDropHeading) {
        // sélection contenu et icon du dropdown
        const dropContent = nodeDropHeading.parentElement.nextElementSibling;
        const dropIcon = nodeDropHeading.previousElementSibling;

        if (dropContent.classList.contains('hide')) {
            dropContent.classList.remove('hide');
            dropContent.classList.add('appear');
            dropIcon.classList.add('rotate');
        } else {
            dropContent.classList.remove('appear');
            dropContent.classList.add('hide');
            dropIcon.classList.remove('rotate');
        }
    }

    return (
        <section className="dropdownSection">
            <div
                onClick={(e) => toggleDropdown(e.target)}
                className="dropdownHeading"
            >
                <img className="chevron" src={chevron} alt="" />
                <h2>{heading}</h2>
            </div>
            <div className="dropdownContent hide">
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
            </div>
        </section>
    );
}

export default Dropdown;