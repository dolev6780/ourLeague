import React, { useState } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function MatchCard({
  match,
  cnt,
  setCountEndedMatches,
  setWinnersOfRound,
}) {
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);
  const [endMatch, setEndMatch] = useState(false);
  const [styleScoreP1, setStyleScoreP1] = useState({ color: "white" });
  const [styleScoreP2, setStyleScoreP2] = useState({ color: "white" });
  const [winner, setWinner] = useState();
  const handleMatch = () => {
    setEndMatch(true);
    setCountEndedMatches(cnt + 1);
    declareWinner();
  };
  const declareWinner = () => {
    if (scoreP1 > scoreP2) {
      setWinner(match.player1);
      setWinnersOfRound((prev) => [...prev, match.player1]);
    } else {
      setWinner(match.player2);
      setWinnersOfRound((prev) => [...prev, match.player2]);
    }
  };

  return (
    <div
      className="max-w-[10rem] w-[10rem] max-h-28 h-28 mt-4 bg-white bg-opacity-40 shadow-md shadow-neutral-900 rounded-lg 
    sm:h-60 sm:max-h-60 sm:w-[16rem] sm:max-w-[16rem]
    md:w-[20rem] md:max-w-[20rem]
    lg:h-64 lg:max-h-64 lg:w-[28rem] lg:max-w-[28rem]
    xl:h-72 xl:max-h-72 xl:w-[32rem] xl:max-w-[32rem]
    2xl:h-80 2xl:max-h-80 2xl:w-[44rem] 2xl:max-w-[44rem]
    3xl:w-[60rem] 3xl:max-w-[60rem]
    "
    >
      <div
        hidden={!endMatch}
        className="absolute z-[100] bg-black bg-opacity-60 max-w-[160px] w-[160px] max-h-28 h-28 rounded-lg
        sm:h-60 sm:max-h-60 sm:w-[16rem] sm:max-w-[16rem]
    md:w-[20rem] md:max-w-[20rem]
    lg:h-64 lg:max-h-64 lg:w-[28rem] lg:max-w-[28rem]
    xl:h-72 xl:max-h-72 xl:w-[32rem] xl:max-w-[32rem]
    2xl:h-80 2xl:max-h-80 2xl:w-[44rem] 2xl:max-w-[44rem]
    3xl:w-[60rem] 3xl:max-w-[60rem]
        "
      >
        <p className="text-green-400 text-sm w-full h-full flex items-center justify-center overflow-hidden
        sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl
        ">
          Winner of the match <br /> {winner}
        </p>
      </div>
      <div className="h-full relative ">
        <div>
          <h1
            className="text-xs font-semibold py-1 flex justify-center items-center
         sm:text-xl
         "
          >
            Tournament Match
          </h1>
          <hr
            className="h-px bg-gradient-to-r from-blue-500 to-blue-200 border-0
         sm:h-0.5
         "
          />
        </div>
        <div className="flex justify-between py-4 items-center sm:mt-4"
        >
          <div className="flex pl-2 lg:px-10 2xl:px-16 3xl:px-20">
            <div
              className="w-6 overflow-hidden
             sm:w-20
          "
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl"><SportsSoccerIcon fontSize="inherit"/></p>
              <p className="sm:text-lg">{match.player1}</p>
            </div>
            <div className="flex flex-col sm:px-2 z-[50]">
              <button
              
                disabled={endMatch}
                onClick={() => {
                  setScoreP1(scoreP1 + 1);
                  setStyleScoreP1({ color: "green", transform: "scale(1.3)"});
                  setTimeout(() => {
                    setStyleScoreP1({ color: "white" });
                  }, 3000);
                }}
              >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl"><KeyboardArrowUpIcon fontSize="inherit" /></p>
              </button>
              <button
                disabled={endMatch}
                onClick={
                  scoreP1 !== 0
                    ? () => {
                        setScoreP1(scoreP1 - 1);
                      }
                    : null
                }
              >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl"><KeyboardArrowDownIcon fontSize="inherit" /></p>
              </button>
            </div>
          </div>
          <div className="absolute flex flex-col top-[40%] w-full
          sm:top-[50%] md:top-[40%]
          ">
            <div
              className="text-sm flex justify-center
          sm:text-2xl sm:mt-6
          md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl
          "
            >
              <p style={styleScoreP1}>{scoreP1}</p>:
              <p style={styleScoreP2}>{scoreP2}</p>
            </div>
            <button
              disabled={endMatch}
              onClick={
                scoreP1 === scoreP2
                  ? null
                  : () => {
                      handleMatch();
                    }
              }
              className="text-xs font-semibold w-10 m-auto mt-2 
            sm:text-xl sm:mt-6 sm:w-fit
            "
            >
              {endMatch ? "Final" : "End match"}
            </button>
          </div>
          <div className="flex pr-2 lg:px-10 2xl:px-16 3xl:px-20">
            <div className="flex flex-col sm:px-2 z-[50]">
              <button
                disabled={endMatch}
                onClick={() => {
                  setScoreP2(scoreP2 + 1);
                  setStyleScoreP2({ color: "green", transform: "scale(1.3)"});
                  setTimeout(() => {
                    setStyleScoreP2({ color: "white" });
                  }, 3000);
                }}
              >
               <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl"><KeyboardArrowUpIcon fontSize="inherit" /></p>
              </button>
              <button
                disabled={endMatch}
                onClick={
                  scoreP2 !== 0
                    ? () => {
                        setScoreP2(scoreP2 - 1);
                      }
                    : null
                }
              >
             <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl"><KeyboardArrowDownIcon fontSize="inherit" /></p>
              </button>
            </div>
            <div
              className="w-6 overflow-hidden
          sm:w-20
          "
            >
             <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl"><SportsSoccerIcon fontSize="inherit" /></p>
              <p className="sm:text-lg">{match.player2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
