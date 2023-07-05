import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import InputWithIcon from '../components/InputWithIcon';
import Loader from '../components/Loader';
export default function SignUp() {
  const navigate = useNavigate();
    const [nickName, setNickName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {signup, error, isLoading} = useSignup();

    const sendDetails = async () => {
      signup(nickName, email, password);
    };
  return (
    <div className="p-8 w-full h-[90vh] flex justify-center items-center">
      <div
        className="p-8 flex flex-col bg-white bg-opacity-[0.08] border w-full rounded-lg mb-20 md:w-auto md:p-16
      "
      >
        <h1 className="text-4xl font-bold mb-4 md:text-6xl md:mb-10">
          Sign Up
        </h1>
        <div className="mt-4 sm:w-[500px] m-auto">
          <InputWithIcon
            icon={<DriveFileRenameOutlineIcon />}
            type={"text"}
            setState={setNickName}
            isrequired={true}
            placeholder={"Nick Name"}
          />
        </div>
        <div className="mt-4 sm:w-[500px] m-auto">
          <InputWithIcon
            icon={<AlternateEmailIcon />}
            type={"email"}
            setState={setEmail}
            isrequired={true}
            placeholder={"Email"}
          />
        </div>
        <div className="mt-4 sm:w-[500px] m-auto">
          <InputWithIcon
            icon={<PasswordIcon />}
            type={"password"}
            setState={setPassword}
            isrequired={true}
            placeholder={"Password"}
          />
        </div>
        <button
          className="p-3 pr-5 pl-5 mt-10 m-auto rounded-lg bg-white bg-opacity-60 text-black font-bold md:p-4 md:pr-6 md:pl-6 md:mt-14"
          onClick={sendDetails}
        >
          {isLoading ? <Loader/> :'Sign Up'}
        </button>
        <span className="mt-4 md:mt-6">
          Already signed up?{" "}
          <span
            className="font-bold text-blue-200 md:hover:underline"
            onClick={() => {
              navigate("/signin");
            }}
          >
            sign in
          </span>
        </span>
      </div>
    </div>
  );
}
