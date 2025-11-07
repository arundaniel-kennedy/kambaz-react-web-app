"use client";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import * as db from "../Database";

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course_data, index) => {
            return (
              <Col
                className="wd-dashboard-course"
                style={{ width: "300px" }}
                key={index}
              >
                <Card>
                  <Link
                    href={`/Courses/${course_data._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg
                      variant="top"
                      src={course_data.image}
                      width="100%"
                      height={160}
                    />
                    <CardBody>
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course_data.name}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course_data.description}
                      </CardText>
                      <Button variant="primary">Go</Button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(deleteCourse(course_data._id));
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(setCourse(course_data));
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.js.png" width={200} height={150} alt="" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/CS5200" className="wd-dashboard-course-link">
            <Image src="/images/react.js.png" width={200} height={150} alt="" />
            <div>
              <h5> CS5200 DBMS </h5>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/CS6120" className="wd-dashboard-course-link">
            <Image src="/images/react.js.png" width={200} height={150} alt="" />
            <div>
              <h5> CS6120 NLP </h5>
              <p className="wd-dashboard-course-title">
                Natural Language processing
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/CS5800" className="wd-dashboard-course-link">
            <Image src="/images/react.js.png" width={200} height={150} alt="" />
            <div>
              <h5> CS5800 Algo </h5>
              <p className="wd-dashboard-course-title">Algorithms</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/CS5010" className="wd-dashboard-course-link">
            <Image src="/images/react.js.png" width={200} height={150} alt="" />
            <div>
              <h5> CS5010 PDP </h5>
              <p className="wd-dashboard-course-title">
                Program Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.js.png" width={200} height={150} alt="" />
            <div>
              <h5> CS7010 APDP </h5>
              <p className="wd-dashboard-course-title">
                Advanced Program Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/CS7200" className="wd-dashboard-course-link">
            <Image src="/images/react.js.png" width={200} height={150} alt="" />
            <div>
              <h5> CS7200 Advanced DBMS </h5>
              <p className="wd-dashboard-course-title">
                Advanced DataBase Management System
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
