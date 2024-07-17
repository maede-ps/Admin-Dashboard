import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "../../../node_modules/@mui/material/index";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant={'contained'} color={'error'} onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
    <br /> <Button variant={'contained'} color={'success'} onClick={() => signIn()}>Sign in</Button>
    </>
  );
};

export default Login;
