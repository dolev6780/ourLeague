import React, {useState} from 'react'
import TournamentDetails from './tournamentDisplays/TournamentDetails';
import Members from './tournamentDisplays/Members';
export default function NewTournament() {
  const [whichDisplay, setWhichDisplay] = useState("TournamentDetails");
  const handleDisplay = (whichDisplay) => {
    setWhichDisplay(whichDisplay);
  }
const showDisplay = (whichDisplay) => {
  switch (whichDisplay) {
    case "TournamentDetails":
            return <TournamentDetails handleDisplay={handleDisplay}/>;
    case "Members":
      return <Members handleDisplay={handleDisplay}/>;
      default:
        break;
         
}
}

  return (
    <div className='w-full mt-20'>
      <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100'>New Tournament</h1>
      {showDisplay(whichDisplay)}
    </div>
  )
}
