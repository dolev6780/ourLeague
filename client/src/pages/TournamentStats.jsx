import React, { useState, useEffect, useCallback } from "react";
import MatchCard from "../components/MatchCard";

export default function TournamentStats() {
  const [tournamentDetails, setTournamentDetails] = useState({});
  const [tournamentMembers, setTournamentMembers] = useState([]);
  const [groupA, setGroupA] = useState([]);
  const [countEndedMatches, setCountEndedMatches] = useState(0);
  const [endRound, setEndRound] = useState(false);
  const [winnersOfRound, setWinnersOfRound] = useState([]);
  const [nextRound, setNextRound] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const getData = () => {
      const tournamentMembers = localStorage.getItem("TournamentMembers");
      const tournamentDetails = localStorage.getItem("TournamentDetails");
      if (tournamentDetails && tournamentMembers) {
        setTournamentDetails(JSON.parse(tournamentDetails));
        setTournamentMembers(JSON.parse(tournamentMembers));
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (countEndedMatches === groupA.length) {
      setEndRound(true);
    } else {
      setEndRound(false);
    }

    if (winnersOfRound.length === 1 && groupA.length === 1) {
      setWinner(winnersOfRound[0]);
    } else {
      setWinner(null);
    }
  }, [countEndedMatches, groupA.length, winnersOfRound]);

  const shuffle = useCallback((array) => {
    let data = [...array];
    let currentIndex = data.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [data[currentIndex], data[randomIndex]] = [
        data[randomIndex],
        data[currentIndex],
      ];
    }
    return data;
  }, []);

  const generateStructure = useCallback((playerCount, players) => {
    let matches = playerCount / 2;
    let groupA = [];
    let j = 0;

    for (let i = 0; i < matches; i++) {
      let player1 = players[j];
      let player2 = players[j + 1];
      groupA.push({ player1, player2 });
      j += 2;
    }

    return groupA;
  }, []);

  const handleClick = useCallback(() => {
    const data = shuffle(tournamentMembers);
    const playerCount = data.length;
    let groupA = generateStructure(playerCount, data);
    setGroupA(groupA);
  }, [shuffle, tournamentMembers, generateStructure]);

  const generateNextRound = useCallback(() => {
    setNextRound(false);
    const playerCount = winnersOfRound.length;
    let nextRound = generateStructure(playerCount, winnersOfRound);
    setGroupA(nextRound);
    setWinnersOfRound([]);
    setEndRound(false);
  }, [generateStructure, winnersOfRound]);

  const handleEndRound = useCallback(() => {
    if (groupA.length === 1 && winnersOfRound.length === 1) {
      setNextRound(false);
      setEndRound(false);
      return;
    }
    setGroupA([]);
    setNextRound(true);
    setCountEndedMatches(0);
  }, [groupA.length, winnersOfRound.length]);
console.log(groupA.length)
  return (
    <div className="p-10">
      <h1 className="mt-4 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-300 to-blue-400">
        Tournament stats
      </h1>
      <div className="flex justify-between mt-4 sm:max-w-[500px] sm:m-auto sm:mt-8">
        <h1 className="text-xl mr-2">Name: {tournamentDetails.title}</h1>
        <h1 className="text-xl ml-2">Type: {tournamentDetails.type}</h1>
      </div>
      <div className="bg-white bg-opacity-40 rounded mt-4 max-h-[150px] overflow-y-scroll no-scrollbar
      sm:max-h-[250px] sm:max-w-[500px] m-auto
      ">
        <h1 className="font-semibold">Members</h1>
        {tournamentMembers.map((member, i) => (
          <div key={i}>{member}</div>
        ))}
      </div>
      <div>
        <button
          className="border p-4 mt-4"
          onClick={() => {
            handleClick();
          }}
        >
          Start Tournament
        </button>
      </div>
      <div className="mt-4 flex flex-wrap justify-around ">
        {groupA.map((match, i) => (
          <React.Fragment key={i}>
            <MatchCard
              match={match}
              cnt={countEndedMatches}
              setCountEndedMatches={setCountEndedMatches}
              setWinnersOfRound={setWinnersOfRound}
            />
          </React.Fragment>
        ))}
      </div>
      <div>
        <button
          onClick={handleEndRound}
          hidden={!endRound}
          className="border p-4 mt-4"
        >
          End round
        </button>
        <button
          onClick={generateNextRound}
          hidden={!nextRound}
          className="border p-4 mt-4"
        >
          Next round
        </button>
      </div>
      <p>{winner}</p>
    </div>
  );
}
