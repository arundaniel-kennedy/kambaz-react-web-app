import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen gap-3" style={{ width: "350px"}}>
      <h3>Sign up</h3>
      <FormControl
        placeholder="username"
        className="wd-username mb-2"
        defaultValue={"alice"}
      />
      <FormControl
        placeholder="password"
        type="password"
        className="wd-password mb-2"
        defaultValue={"123456"}
      />
      <FormControl
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2"
        defaultValue={"123456"}
      />
      <Link href="Profile" className="btn btn-primary w-100"> Sign up </Link>
      <Link href="Signin"> Sign in </Link>
    </div>
  );
}
