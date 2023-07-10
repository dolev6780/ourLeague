import React, {useState} from 'react'
import ConstestDetails from './displays/ConstestDetails';
import Members from './displays/Members';
import FinishDisplay from './displays/FinishDisplay';
export default function CreateContest({ getTitle, getMembersOption }) {
  const [whichDisplay, setWhichDisplay] = useState(`${getTitle}Details`);
  const [details, setDetails] = useState({});
  const [members, setMembers] = useState([]);
  const handleDisplay = (whichDisplay) => {
    setWhichDisplay(whichDisplay);
  };
  const showDisplay = (whichDisplay) => {
    switch (whichDisplay) {
      case `${getTitle}Details`:
        return (
          <ConstestDetails
            handleDisplay={handleDisplay}
            setDetails={setDetails}
            getTitle={getTitle}
            getMembersOption={getMembersOption}
          />
        );
      case "Members":
        return (
          <Members
            handleDisplay={handleDisplay}
            num={details?.numOfMembers}
            title={`${getTitle} members`}
            backBtnCase={`${getTitle}Details`}
            setMembers={setMembers}
          />
        );
      case "Finish":
        return (
          <FinishDisplay
            backBtnCase={"Members"}
            title={`${getTitle}`}
            handleDisplay={handleDisplay}
            members={members}
            details={details}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="w-full mt-10">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100">
        New {getTitle}
      </h1>
      {showDisplay(whichDisplay)}
    </div>
  );
}
