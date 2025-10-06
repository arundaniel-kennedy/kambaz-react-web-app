import { Button, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentsControls() {
    return (
        <div className="d-flex flex-row">
            <FormControl placeholder="Search for Assignments" id="wd-search-assignment" style={{width: "350px"}}/>
            <Button className="ms-auto btn-secondary rounded-1">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
            <Button className="ms-2 btn-danger rounded-1">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
        </div>
    )
};

{/* <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button> */}