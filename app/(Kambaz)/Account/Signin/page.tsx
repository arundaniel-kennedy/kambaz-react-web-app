"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState({username: "iron_man",password: "stark123" });
  const dispatch = useDispatch();
  const signin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    console.log(user)
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" style={{ width: "350px" }}>
      <h3>Sign in</h3>
      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <Button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100"
      >
        Sign in
      </Button>
      <br />
      <Link href="Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
