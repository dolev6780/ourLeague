import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function FinishDisplay({backBtnCase,title, handleDisplay, members, details}) {
    const navigate = useNavigate();

  const handleData = async () => {
    localStorage.setItem(`${title}Details`, JSON.stringify(details));
    localStorage.setItem(`${title}Members`, JSON.stringify(members));
    navigate('/');
  }
  
  return (
      <div className="p-10">
        <div className="mt-10">
          <h1 className="text-2xl font-bold tracking-wider border-x-[1px] border-t rounded-t-2xl py-1 bg-white bg-opacity-40">
            {title} name
          </h1>

          <p className="text-xl font-semibold text-blue-300 border rounded-b-2xl py-2">
            {details.title}
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold tracking-wider border-x-[1px] border-t rounded-t-2xl py-1 bg-white bg-opacity-40">
            Type of {title}
          </h1>
          <p className="text-xl font-semibold text-blue-300 border rounded-b-2xl py-2">
            {details.type}
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold tracking-wider border-x-[1px] border-t rounded-t-2xl py-2 bg-white bg-opacity-40">
            Members of {title}
          </h1>
          <div className="max-h-[30vh] overflow-auto w-full rounded-b-2xl border">
            {members.map((member, i) => {
              return (
                <div key={i}>
                  <p className="text-xl font-semibold text-blue-300 py-2">
                    {member}
                  </p>
                  {i === members.length - 1 ? "" : <hr />}
                </div>
              );
            })}
          </div>
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
            onClick={()=>{handleData()}}
            className="mt-6 bg-inherit border-2 hover:bg-white hover:bg-opacity-40 text-white font-bold py-2 px-4 rounded-lg mr-2"
          >
            create
          </button>
        </div>
      </div>
    );
}
