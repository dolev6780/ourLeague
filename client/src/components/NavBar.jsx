import React from 'react'
import SportsIcon from '@mui/icons-material/Sports';
import {useNavigate} from 'react-router-dom';
import { useUserContext } from "../hooks/useUserContext";
import { useSignout } from "../hooks/useSignout";
import '../App.css';
export default function NavBar() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { signout } = useSignout();
  const displayName = user? user.user.nickName : "Guest";
  return (
    <div>
      <nav className="flex justify-between p-4 font-sans">
        <div className="flex items-center">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          >
            <SportsIcon className="text-blue-500" fontSize="large" />
          </div>
          <div className='bg-white ml-4 bg-opacity-40 p-2 rounded-sm'>
            <p className="font-bold tracking-wider">
              {displayName}
            </p>
          </div>
        </div>
        {user? (
          <div className="flex items-center">
            <button
          onClick={() => {
            signout();
            navigate("/");
            window.location.reload();
          }}
          className="mr-4 p-2 rounded-sm bg-white bg-opacity-50 text-white font-bold"
        >
          sign out
        </button>
          </div>
        ):( <div className="flex">
        <button
          onClick={() => {
            navigate("signin");
          }}
          className="mr-4 p-2 rounded bg-gray-950 text-white font-bold"
        >
          sign in
        </button>
        <button
          onClick={() => {
            navigate("signup");
          }}
          className="p-2 rounded bg-white text-black font-bold"
        >
          sign up
        </button>
      </div>)}
       
      </nav>
    </div>
  );
}
