import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useSignin } from "../hooks/useSignin";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import InputWithIcon from "../components/InputWithIcon";
import Loader from '../components/Loader';
export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {signin, error, isLoading} = useSignin();
    const checkDetails =  () => {
      signin(email, password);
    }
    console.log(isLoading);
  return (
    <div className="p-8 w-full h-[90vh] flex justify-center items-center">
      <div
        className="p-8 flex flex-col bg-white bg-opacity-[0.08] border w-full rounded-lg mb-20 md:w-auto md:p-16
      "
      >
        <h1 className="text-4xl font-bold mb-4 md:text-6xl md:mb-10">
          Sign In
        </h1>
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
          onClick={checkDetails}
        >
          {isLoading ? <Loader/> : 'Sign In'}
        </button>
        <span className="mt-4 md:mt-6">
          Not signed up yet?{" "}
          <span
            className="font-bold text-blue-200 md:hover:underline"
            onClick={() => {
              navigate("/signup");
            }}
          >
            sign ip
          </span>
        </span>
      </div>
    </div>
  )
}
