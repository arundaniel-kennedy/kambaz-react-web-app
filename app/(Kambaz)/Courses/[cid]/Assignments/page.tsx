import Link from "next/link";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/A1`}
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <div>Multiple Modules | Not available until May 6 at 12:00 AM | Due May 13
          at 11:59 PM | 100 pts</div>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/A2`}
            className="wd-assignment-link"
          >
            A2 - CSS + bootstrap
          </Link>
          <div>Multiple Modules | Not available until May 13 at 12:00 AM | Due May 20
          at 11:59 PM | 100 pts</div>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/Courses/${cid}/Assignments/A3`}
            className="wd-assignment-link"
          >
            A3 - JS + React
          </Link>
          <div>Multiple Modules | Not available until May 20 at 12:00 AM | Due May 27
          at 11:59 PM | 100 pts</div>
        </li>
      </ul>
    </div>
  );
}
