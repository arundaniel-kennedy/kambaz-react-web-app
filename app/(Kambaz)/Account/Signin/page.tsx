import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signin() {
  return (
    <div id="wd-signin-screen" style={{ width: "350px" }}>
      <h3>Sign in</h3>
      <FormControl id="wd-username" placeholder="username" className="mb-2"/>
      <FormControl id="wd-password" placeholder="password" type="password" className="mb-2"/>
      <Link href="/Dashboard" id="wd-signin-btn" className="btn btn-primary w-100">
        Sign in
      </Link>
      <br />
      <Link href="Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
