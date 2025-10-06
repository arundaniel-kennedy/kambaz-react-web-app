import Link from "next/link";
import AssignmentControls from "./AssignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <ListGroup className="rounded-0 mt-5" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-2 d-flex flex-row gap-3">
              <BsGripVertical className="fs-3" /> 
              <MdEditDocument />
              A1
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
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
