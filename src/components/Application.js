import React, { useContext } from "react";
import { Router } from "@reach/router";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "../pages/Profile";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../providers/UserProvider.js";

function Application() {
const user = useContext(UserContext);
  return (
        user ?
        <Profile />
      :
        <Router>
          <Login path="/" />
          <SignUp path="/signUp" />
          <PasswordReset path="/passwordReset" />
        </Router>

  );
}
export default Application;