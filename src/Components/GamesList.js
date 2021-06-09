import { useContext } from "react";
import { GamesContext } from "../Context/GamesContext";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAlt from "@material-ui/icons/ThumbDownAlt";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ScoreIcon from "@material-ui/icons/Score";
import "../Styles/GamesList.css";
function GamesList() {
  const { games, colors } = useContext(GamesContext);

  const renderGenres = (element) => {
    let elementGenres = element.genre.replace(/\s/g, "").split(",");
    return elementGenres.map((genre) => {
      return (
        <span key={genre+element.id} className="genre" style={{ backgroundColor: colors[genre] }}>
          {genre}
        </span>
      );
    });
  };

  const renderGames = () => {
    return games.map((game, index) => {
      return (
        <div key={index} className="card">
          <div className="title">
            <h2>
              {game.title}
              {renderGenres(game)}
            </h2>
          </div>
          <div className="prop editorsChoice">
            <h4>Editors choice? </h4>
            <div className="thumbIcon">
              {game.editors_choice === "Y" ? <ThumbUpAlt /> : <ThumbDownAlt />}
            </div>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="prop">
              <SportsEsportsIcon />
              <h4 className="thumbIcon info">{game.platform}</h4>
            </div>
            <div className="prop">
              <ScoreIcon />
              <h4 className="thumbIcon info"> {game.score}/10</h4>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="gamesContainer">{renderGames()}</div>;
}

export default GamesList;
