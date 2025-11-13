import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

import "./page.css"

export default function Lab5() {
  return (
    <div id="wd-lab5" className="pt-3">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a
          href={`${HTTP_SERVER}/lab5/welcome`}
          className="list-group-item w-25"
          target="_blank"
        >
          Welcome
        </a>
      </div>
      <hr />
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
    </div>
  );
}
