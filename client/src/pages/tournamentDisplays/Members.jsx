import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
export default function Members({handleDisplay}) {
  
  const num = 4;
  const numOfMembers = Array.from(Array(num), (_, index) =>
    index + 1
  )
  const [memberInputs, setMemberInputs] = useState(Array(num).fill(""));
  const handleInputChange = (index, value) => {
    setMemberInputs(prevInputs => {
      const newInputs = [...prevInputs];
      newInputs[index] = value;
      return newInputs;
    });
  };

  const handleSubmit = () => {
    console.log(memberInputs);
  };

  return (
    <div className="p-10">
      <div>
        <h1 className="text-2xl my-5 font-bold">Tournament members</h1>
      </div>
      <div className="max-h-[50vh] overflow-auto w-full rounded-lg">
        {numOfMembers.map((member, i) => {
          return (
            <div key={member}>
              <h1 className="flex mt-4">Member {i + 1}</h1>
              <CustomInput type="text"
                setState={value => handleInputChange(i, value)}
                isrequired={true}
                placeholder="Enter member nick name"/>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            handleDisplay("TournamentDetails");
          }}
          className="mt-6 bg-inherit border-2 hover:bg-white hover:bg-opacity-40 text-white font-bold py-2 px-4 rounded-lg ml-2"
        >
          Back
        </button>
        <button
          onClick={()=>{handleSubmit()}}
          className="mt-6 bg-inherit border-2 hover:bg-white hover:bg-opacity-40 text-white font-bold py-2 px-4 rounded-lg mr-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}
