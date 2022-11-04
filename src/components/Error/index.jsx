import { Link } from "react-router-dom";
import './Error.css';

function Error() {
  return (
    <div className="errorWrapper">
      <h1 className="big404">404</h1>
      <div className="errorMessage">
        Il semblerait que la page que vous cherchez n’existe pas
      </div>
      <Link className="errorLink"  to="/">Retourner sur la page d'accueil</Link>   
    </div>
  )
}
export default Error