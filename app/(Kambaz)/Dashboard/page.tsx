import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
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
