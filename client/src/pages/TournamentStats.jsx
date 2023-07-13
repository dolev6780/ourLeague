import React, { useState, useEffect } from 'react';

export default function TournamentStats() {
  const [tournamentDetails, setTournamentDetails] = useState({});
  const [tournamentMembers, setTournamentMembers] = useState([]);
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  useEffect(() => {
    const getData = () => {
      const tournamentMembers = localStorage.getItem('TournamentMembers');
      const tournamentDetails = localStorage.getItem('TournamentDetails');
      if (tournamentDetails && tournamentMembers) {
        setTournamentDetails(JSON.parse(tournamentDetails));
        setTournamentMembers(JSON.parse(tournamentMembers));
      }
    };

    getData();
  }, []); // empty dependency array, runs only once

  function shuffle(array) {
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
  }

  const generateStructure = (playerCount, players) => {
    let matches = playerCount / 2;
    let groupA = [];
    let groupB = [];
    let j = 0;

    for (let i = 0; i < matches/2; i++) {
      let player1 = players[j];
      let player2 = players[j + 1];
      groupA.push({ player1, player2 });
      j += 2;
    }
    for (let i = matches/2; i < matches; i++) {
      let player1 = players[j];
      let player2 = players[j + 1];
      groupB.push({ player1, player2 });
      j += 2;
    }

    return {groupA,groupB};
  };
  const handleClick = ()=> {
    const data = shuffle(tournamentMembers);
    const playerCount = data.length;
    let {groupA,groupB} = generateStructure(playerCount, data);
    setGroupA(groupA);
    setGroupB(groupB);
  }
  return (
    <div className="p-10">
      <h1 className="mt-4 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-300 to-blue-400">
        Tournament stats
      </h1>
      <div className="flex justify-between mt-4">
        <h1 className="text-xl">Name: {tournamentDetails.title}</h1>
        <h1 className="text-xl">Type: {tournamentDetails.type}</h1>
      </div>
      <div className="bg-white bg-opacity-40 rounded mt-4 max-h-[150px] overflow-scroll">
        <h1 className="font-semibold">Members</h1>
        {tournamentMembers.map((member, i) => (
          <div className="" key={i}>
            {member}
          </div>
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
      <div>
      <h1>Group A matches</h1>
  <div className="mt-10 grid grid-cols-2 gap-y-48 gap-x-4">
    {groupA.map((member, i) => {
      return (
        <div key={i} className="mt-10 flex justify-around gap-4">
          <h1 className="max-h-[100px] h-[60px] w-[150px] flex justify-center items-center mt-2 border p-2">
            {member.player1}
          </h1>
          <svg className="mt-2 w-10 h-[3px]">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="2" />
          </svg>
          <h1 className="max-h-[100px] h-[60px] w-[150px] flex justify-center items-center mt-2 border p-2">
            {member.player2}
          </h1>
        </div>
      );
    })}
  </div>
    <h1>Group B matches</h1>
  <div className="mt-10 grid grid-cols-2 gap-y-48 gap-x-4">
    {groupB.map((member, i) => {
      return (
        <div key={i} className="mt-10 flex justify-around gap-4">
          <h1 className="max-h-[100px] h-[60px] w-[150px] flex justify-center items-center mt-2 border p-2">
            {member.player1}
          </h1>
          <svg className="mt-2 w-10 h-[3px]">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="2" />
          </svg>
          <h1 className="max-h-[100px] h-[60px] w-[150px] flex justify-center items-center mt-2 border p-2">
            {member.player2}
          </h1>
        </div>
      );
    })}
  </div>
</div>
    </div>
  );
}
