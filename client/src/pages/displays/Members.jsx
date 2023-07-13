import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
export default function Members({handleDisplay, num,title,backBtnCase,setMembers}) {
 
  const numOfMembers = Array.from(Array(num), (_, index) =>
    index + 1
  )
  const [memberInputs, setMemberInputs] = useState(Array(num).fill(""));
  const [contestMemberError, setContestMemberError] = useState(Array(num).fill(""));
  const handleInputChange = (index, value) => {
    setMemberInputs(prevInputs => {
      const newInputs = [...prevInputs];
      newInputs[index] = value;
      return newInputs;
    });
  };
  const handleSubmit = async () => {
    for (let index = 0; index < memberInputs.length; index++) {
      if (memberInputs[index] === "") {
        setContestMemberError(prevInputs => {
          const newInputs = [...prevInputs];
          newInputs[index] = "Please enter member nick name";
          return newInputs;
        });
        setTimeout(() => {
          setContestMemberError("");
        }, 5000);
        return;
      }
      setContestMemberError("");
    }
    await setMembers(memberInputs);
    handleDisplay("Finish");
  };

  return (
    <div className="p-10">
      <div>
        <h1 className="text-2xl my-5 font-bold">{title}</h1>
      </div>
      <div className="max-h-[50vh] overflow-auto w-full rounded-lg">
        {numOfMembers.map((member, i) => {
          return (
            <div key={member}>
              <h1 className="flex mt-4">Member {i + 1}</h1>
              <CustomInput
                type="text"
                setState={(value) => handleInputChange(i, value)}
                isrequired={true}
                placeholder="Enter member nick name"
              />
              {contestMemberError[i] && (
                <span className="text-red-500 text-sm font-light flex">
                  {contestMemberError}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            handleDisplay(backBtnCase);
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
