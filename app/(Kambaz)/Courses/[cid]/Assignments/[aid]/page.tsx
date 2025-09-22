export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={10}
        cols={50}
        defaultValue={
          "The assignment is available online Submit a link to the landing page of your web application running on Vercel. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the kanbas application should include a link to navigate back to the landing page"
        }
      ></textarea>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input type="number" id="wd-points" defaultValue={100} />
              <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select name="" id="wd-assignment-group">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="quizzes">QUIZZES</option>
                <option value="exams">EXAMS</option>
              </select>
              <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-grade-display">Display Grade as</label>
            </td>
            <td>
              <select name="" id="wd-grade-display">
                <option value="percentage">Percentage</option>
              </select>
              <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select name="" id="wd-submission-type">
                <option value="online">Online</option>
              </select>

              <br />
              <br />

              <label>Online Entry Options</label>
              <div>
                <input type="checkbox" name="" id="text_entry_box" />
                <label htmlFor="text_entry_box">Text Entry</label>

                <br />

                <input type="checkbox" name="" id="website_url_box" />
                <label htmlFor="website_url_box">Website URL</label>

                <br />

                <input type="checkbox" name="" id="media_recordings_box" />
                <label htmlFor="media_recordings_box">Media Recordings</label>

                <br />

                <input type="checkbox" name="" id="student_annotation_box" />
                <label htmlFor="student_annotation_box">
                  Student Annotation
                </label>

                <br />

                <input type="checkbox" name="" id="file_uploads_box" />
                <label htmlFor="file_uploads_box">File Uploads</label>
              </div>
          <br />
            </td>
          </tr>
          <tr style={{ marginBottom: "20px" }}>
            <td align="right" valign="top">
              Assign
            </td>
            <td>
              <label>Assign To</label> <br />
              <input type="text" defaultValue={"Everyone"} name="" id="" />
              <br />
              <br />
              <label htmlFor="">Due</label> <br />
              <input type="date" name="" id="" defaultValue="2024-05-13" />
              <br />
              <br />
              <label htmlFor="">Available from</label> <br />
              <input type="date" name="" id="" defaultValue="2024-05-06" />
              <br />
              <br />
              <label htmlFor="">Until</label> <br />
              <input type="date" name="" id="" defaultValue="2024-05-20" />
            </td>
          </tr>
          <tr>
            <td align="right" colSpan={2}>
              <hr />
              <button>Cancel</button>
              <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
