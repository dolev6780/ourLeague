import { useState } from "react";
import {useUserContext} from './useUserContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const useSignup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useUserContext();
    const signup =  (nickName, email, password) => {
        setIsLoading(true);
        setError(null);
        axios.post('/api/user/signup', {
            nickName,
            email,
            password,
        }).then((res)=> {
            setIsLoading(false);
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch({type: "SIGNIN", payload: res.data})
            console.log(res.data)
            navigate("/");

        })
        .catch((err)=>{
            setIsLoading(false);
            setError(err)
            console.log("error",err);
        })
    }


    return {signup, isLoading, error}

}