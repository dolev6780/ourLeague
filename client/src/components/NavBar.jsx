import React from "react";
import SportsIcon from "@mui/icons-material/Sports";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import { useSignout } from "../hooks/useSignout";
import logo from "../assets/logo.png";
import "../App.css";
export default function NavBar() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { signout } = useSignout();
  const displayName = user ? user.user.nickName : "Guest";
  return (
    <div>
      <nav className="flex justify-between p-4 font-sans bg-white bg-opacity-40">
        <div className="flex items-center">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          >
            <img src={logo} width={40} alt="" />
          </div>
          <div className="ml-4 bg-opacity-40 p-2 text-xl">
            <p className="font-bold tracking-wider">{displayName}</p>
          </div>
        </div>
        {user ? (
          <div className="flex items-center">
            <button
              onClick={() => {
                signout();
                navigate("/");
                window.location.reload();
              }}
              className="mr-4 p-2 bg-opacity-50 text-white font-bold text-xl"
            >
              sign out
            </button>
          </div>
        ) : (
          <div className="flex">
            <button
              onClick={() => {
                navigate("signin");
              }}
              className="mr-4 p-2   text-white font-bold text-xl"
            >
              sign in
            </button>
            <button
              onClick={() => {
                navigate("signup");
              }}
              className="p-2 text-black font-bold text-2xl"
            >
              sign up
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
