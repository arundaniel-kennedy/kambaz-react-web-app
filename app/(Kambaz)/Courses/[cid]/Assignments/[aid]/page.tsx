import {
  Button,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { FaCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" style={{ maxWidth: "512px" }}>
      <label htmlFor="wd-name">Assignment Name</label>
      <FormControl
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className="mb-3"
      />
      <FormControl
        as={"textarea"}
        id="wd-description"
        rows={10}
        cols={50}
        className="mb-3"
        defaultValue={
          "The assignment is available online Submit a link to the landing page of your web application running on Vercel. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the kanbas application should include a link to navigate back to the landing page"
        }
      ></FormControl>
      <div className="d-flex flex-row mb-3 gap-3 align-items-center">
        <FormLabel htmlFor="wd-points" className="w-30 text-end m-0">
          Points
        </FormLabel>
        <FormControl
          type="number"
          id="wd-points"
          defaultValue={100}
          className="w-70"
        />
      </div>
      <div className="d-flex flex-row mb-3 gap-3 align-items-center">
        <FormLabel htmlFor="wd-points" className="w-30 text-end m-0">
          Assignment Group
        </FormLabel>
        <FormSelect name="" id="wd-assignment-group" className="w-70">
          <option value="assignments">ASSIGNMENTS</option>
          <option value="quizzes">QUIZZES</option>
          <option value="exams">EXAMS</option>
        </FormSelect>
      </div>
      <div className="d-flex flex-row mb-3 gap-3 align-items-center">
        <FormLabel htmlFor="wd-points" className="w-30 text-end m-0">
          Display Grade as
        </FormLabel>
        <FormSelect name="" id="wd-grade-display" className="w-70">
          <option value="percentage">Percentage</option>
        </FormSelect>
      </div>
      <div className="d-flex flex-row mb-3 gap-3 align-items-start">
        <FormLabel htmlFor="wd-points" className="w-30 text-end m-0 pt-2">
          Submission Type
        </FormLabel>
        <div className="w-70 p-2 rounded-2 border">
          <FormSelect name="" id="wd-submission-type" className="w-70 mb-3">
            <option value="online">Online</option>
          </FormSelect>
          <FormLabel htmlFor="wd-points" className="fw-bold">
            Online Entry Options
          </FormLabel>
          <div className="mb-2 d-flex gap-2 align-items-center">
            <FormCheck type="checkbox" name="" id="text_entry_box" />
            <FormLabel className="m-0" htmlFor="text_entry_box">
              Text Entry
            </FormLabel>
          </div>
          <div className="mb-2 d-flex gap-2 align-items-center">
            <FormCheck type="checkbox" name="" id="website_url_box" />
            <FormLabel className="m-0" htmlFor="website_url_box">
              Website URL
            </FormLabel>
          </div>
          <div className="mb-2 d-flex gap-2 align-items-center">
            <FormCheck type="checkbox" name="" id="media_recordings_box" />
            <FormLabel className="m-0" htmlFor="media_recordings_box">
              Media Recordings
            </FormLabel>
          </div>
          <div className="mb-2 d-flex gap-2 align-items-center">
            <FormCheck type="checkbox" name="" id="student_annotation_box" />
            <FormLabel className="m-0" htmlFor="student_annotation_box">
              Student Annotation
            </FormLabel>
          </div>
          <div className="mb-2 d-flex gap-2 align-items-center">
            <FormCheck type="checkbox" name="" id="file_uploads_box" />
            <FormLabel className="m-0" htmlFor="file_uploads_box">
              File Uploads
            </FormLabel>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row mb-3 gap-3 align-items-start">
        <FormLabel htmlFor="wd-points" className="w-30 text-end m-0 pt-2">
          Assign
        </FormLabel>
        <div className="w-70 p-2 rounded-2 border">
          <FormLabel className="fw-bold" htmlFor="wd-assign-to">
            Assign To
          </FormLabel>
          <FormControl
            className="mb-3"
            type="text"
            defaultValue={"Everyone"}
            name=""
            id="wd-assign-to"
          />
          <FormLabel htmlFor="wd-due-date" className="fw-bold">
            Due
          </FormLabel>
          <InputGroup className="mb-3">
            <FormControl
              type="date"
              name=""
              id="wd-due-date"
              defaultValue="2024-05-13"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              <FaCalendarAlt />
            </span>
          </InputGroup>
          <div className="d-flex flex-row gap-2">
            <div className="w-50">
              <FormLabel htmlFor="wd-due-date" className="fw-bold">
                Available from
              </FormLabel>
              <InputGroup className="mb-3">
                <FormControl
                  type="date"
                  name=""
                  id="wd-avail-date"
                  defaultValue="2024-05-13"
                  aria-describedby="basic-addon3"
                />
                <span className="input-group-text" id="basic-addon3">
                  <FaCalendarAlt />
                </span>
              </InputGroup>
            </div>
            <div className="w-50">
              <FormLabel htmlFor="wd-due-date" className="fw-bold">
                Until
              </FormLabel>
              <InputGroup className="mb-3">
                <FormControl
                  type="date"
                  name=""
                  id="wd-until-date"
                  defaultValue="2024-05-13"
                  aria-describedby="basic-addon4"
                />
                <span className="input-group-text" id="basic-addon4">
                  <FaCalendarAlt />
                </span>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-row justify-content-end">
        <Button className="btn-secondary me-2">Cancel</Button>
        <Button className="btn-danger">Save</Button>
      </div>
    </div>
  );
}
