import React, { useState } from "react";
import CustomSelect from "../../components/CustomSelect";

export default function TournamentDetails({handleDisplay}) {
  const [numberOfMembers, setNumberOfMembers] = useState(2);
  const [typeOfTournament, setTypeOfTournament] = useState("Football");

  const membersOptions = Array.from(Array(32), (_, index) =>
    Math.pow(2, index)
  )
    .filter((option) => option <= Math.pow(2, 5))
    .filter((option) => option !== 1);
    const TypeOptions = ["Football", "Baseball", "Basketball", "Hockey", "Tennis","FIFA", "NBA2K", "Mario Kart","Other"];
  return (
    <div>
      <div className="p-10">
       <div>
        <h1 className="text-2xl my-10 font-bold">Tournament details</h1>
       </div>
        <label className="flex font-bold text-md">Type of tournament</label>
        <CustomSelect
          options={TypeOptions}
          setState={setTypeOfTournament}
          theChoose={typeOfTournament}
        />
      
        <label className="flex font-bold text-md mt-4">How many members?</label>
        <CustomSelect
          options={membersOptions}
          setState={setNumberOfMembers}
          theChoose={numberOfMembers}
        />
        <label className="flex font-bold text-md mt-4">Date to start tournament</label>
        <p>TODO custom date and time</p>
        <div>
          <button
            className="mt-6 bg-inherit border-2 hover:bg-white hover:bg-opacity-40 text-white font-bold py-2 px-4 rounded-lg block ml-auto mr-2"
            onClick={() => {
              handleDisplay("Members");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
