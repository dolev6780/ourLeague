import React, { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import CustomInput from "../../components/CustomInput";
import { TypeOptions } from "../../constants";
export default function TournamentDetails({
  handleDisplay,
  setDetails,
  getTitle,
  getMembersOption,
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
    <div className="mt-10">
      <div className="p-10">
        <h1 className="text-2xl md:text-4xl my-10 font-bold">
          {getTitle} details
        </h1>
        <div>
        <label className="flex font-bold md:text-lg">{getTitle} name</label>
        <CustomInput
          placeholder={`${getTitle} name`}
          setState={setContestName}
          type={"text"}
        />
        {contestNameError && (
          <span className="text-red-500 text-sm md:text-xl font-light flex">
            {contestNameError}
          </span>
        )}{" "}
        <label className="flex font-bold md:text-lg mt-4">
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
        <div>
          <button
            className="mt-6 bg-inherit border-2 hover:bg-white hover:bg-opacity-40 text-white font-bold py-2 px-4 md:py-4 md:px-6 rounded-lg block ml-auto mr-2"
            onClick={() => {
              handleDetails();
            }}
          >
            Next
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
