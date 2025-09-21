import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <div className="d-flex flex-row gap-5">
        <h1>Arun Daniel Kennedy</h1> <span>CS5610.18616.202610</span>
        <u>section: 4</u>
      </div>
      <div>
        <u>Link to Github:</u> https://github.com/arundaniel-kennedy/kambaz-react-web-app
      </div>
      <div className="d-flex flex-row gap-5">
        <u>Alternate URLs:</u>
        <ul>
          <li>http://kambaz-react-web-app.vercel.app/</li>
          <li>http://webdev-class.arundanielk.dev/</li>
        </ul>
      </div>
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Kambaz
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
      </ul>
    </div>
  );
}
