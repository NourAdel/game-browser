import { useContext } from "react";
import { GamesContext } from "../Context/GamesContext";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAlt from "@material-ui/icons/ThumbDownAlt";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ScoreIcon from "@material-ui/icons/Score";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import "../Styles/GamesList.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function GamesList() {
  const { games, colors, loader, errorMessage, setErrorMessage } =
    useContext(GamesContext);

  const renderGenres = (element) => {
    let elementGenres = element.genre.replace(/\s/g, "").split(",");
    return elementGenres.map((genre) => {
      return (
        <span
          key={genre + element.id}
          className="genre"
          style={{ backgroundColor: colors[genre] }}
        >
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

  return (
    <div className="gamesContainer">
      {loader ? (
        <CircularProgress
          color="secondary"
          className="loader"
          style={{ marginTop: "20%" }}
        />
      ) : (
        renderGames()
      )}

      <Snackbar
        open={errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage(false)}
      >
        <Alert onClose={() => setErrorMessage(false)} severity="error">
          An Error occured, Please Try again!
        </Alert>
      </Snackbar>
    </div>
  );
} 

export default GamesList;
