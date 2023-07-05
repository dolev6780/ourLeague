import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-10">
        <div className="mt-4">
          <button
            onClick={() => {
              navigate("/createnewtournament");
            }}
            className="border-2 rounded-2xl p-4 hover:bg-white hover:bg-opacity-50"
          >
            new tournament
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              navigate("/createnewleague");
            }}
            className="border-2 rounded-2xl p-4 hover:bg-white hover:bg-opacity-50"
          >
            new league
          </button>
        </div>
      </div>
    </div>
  );
}
