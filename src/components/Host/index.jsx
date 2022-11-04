import './Host.css'

function Host({ hostName, hostImg }) {
    return (
        <div className="hostContainer">
            <p className="hostName">{hostName}</p>
            <img className="hostImage" src={hostImg} alt="" />
        </div>
    );
}

export default Host;
