import { Link } from 'react-router-dom';

import './Error.css';
import errorIcon from '../../assets/404.svg';

function Error() {
    return (
        <>
            <div className="contError">
                <main className="errormain">
                    <img className="errorIcon" src={errorIcon} alt="" />
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </main>
                <section className="errorSection">
                    <Link to="/">Retourner sur la page d'accueil </Link>
                </section>
            </div>
        </>
    );
}

export default Error;
