import React, { useState } from "react";
import { useSelector } from "react-redux";

import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { UserProfile } from "./UserProfile";

export const Form = () => {
  const [page, setPage] = useState("signup");
  const accessToken = useSelector((store) => store.user.accessToken);

  if (!accessToken) {
    return (
      <>
        {page === "signup" ? (
          <SignUp setPage={setPage} />
        ) : (
          <Login setPage={setPage} />
        )}
      </>
    );
  } else {
    return <UserProfile setPage={setPage} />;
  }
};
