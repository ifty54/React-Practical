function Player(props){
    const {playerName,playerClub} = props;
    return <div>
        <h1 className="first">{playerName}</h1>
        <p className="second">{playerClub}</p>
    </div>
}

export default Player;