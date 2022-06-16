import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "../../Firebase";
import { actionTypes } from "../Reducer/reducer";
import { useStatevalue } from "../StateProvider/StateProvider";

export const Login = () => {
  const [{},dispatch]=useStatevalue()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => dispatch({type:actionTypes.SET_USER,
      user:result.user}))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="bg-slate-100  h-screen w-screen grid place-items-center">
      <div className="p-24 flex justify-center items-center flex-col text-center rounded-xl shadow-2xl bg-white">
        <img
          className="h-28 mb-10 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        />
        <div>
          <h1>Sign to Whatsapp</h1>
          <Button
            className="mt-12 !bg-green-500 !text-white  "
            onClick={signIn}
          >
            sign in white google
          </Button>
        </div>
      </div>
    </div>
  );
};
