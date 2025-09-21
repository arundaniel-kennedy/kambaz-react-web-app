import Link from "next/link";
import { redirect } from "next/navigation";

export default function Kambaz() {
  redirect("/Account/Signin");
  return (
    <div id="wd-kambaz">
      <h1>Kambaz</h1>
      <div className="">To go to Labs, click here: <Link href="/Labs" id="wd-lab1-link">Home </Link></div>
    </div>
);}