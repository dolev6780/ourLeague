import React, { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import CustomInput from '../../components/CustomInput'
import { TypeOptions } from "../../constants";
export default function TournamentDetails({
  handleDisplay,
  setDetails,
  getTitle,
  getMembersOption
}) {
  const [numberOfMembers, setNumberOfMembers] = useState(2);
  const [typeOfContest, setTypeOfContest] = useState("Football");
  const [contestName, setContestName] = useState("");
  const [contestNameError, setContestNameError] = useState("");
  const handleDetails = async () => {
    if (contestName === "") {
      setContestNameError("Please enter a contest name");
      setTimeout(() => {
        setContestNameError("");
      }, 5000);
      return;
    }

    setContestNameError("");
    await setDetails({
      title: contestName,
      type: typeOfContest,
      numOfMembers: numberOfMembers,
    });
    handleDisplay("Members");
  };

  return (
    <div>
      <div className="p-10">
        <div>
          <h1 className="text-2xl my-10 font-bold">{getTitle} details</h1>
        </div>
        <label className="flex font-bold text-md">{getTitle} name</label>
        <CustomInput
          placeholder={`${getTitle} name`}
          setState={setContestName}
          type={"text"}
        />
        {contestNameError && (
          <span className="text-red-500 text-sm font-light flex">
            {contestNameError}
          </span>
        )}{" "}
        <label className="flex font-bold text-md mt-4">
          Type of {getTitle}
        </label>
        <CustomSelect
          options={TypeOptions}
          setState={setTypeOfContest}
          theChoose={typeOfContest}
        />
        <label className="flex font-bold text-md mt-4">How many members?</label>
        <CustomSelect
          options={getMembersOption}
          setState={setNumberOfMembers}
          theChoose={numberOfMembers}
        />
        <label className="flex font-bold text-md mt-4">
          Date to start contest
        </label>
        <p>TODO custom date and time</p>
        <div>
          <button
            className="mt-6 bg-inherit border-2 hover:bg-white hover:bg-opacity-40 text-white font-bold py-2 px-4 rounded-lg block ml-auto mr-2"
            onClick={() => {
              handleDetails();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
