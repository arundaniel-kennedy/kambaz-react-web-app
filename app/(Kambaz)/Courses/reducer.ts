import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    courses: courses,
    enrollments: enrollments
};
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course }) => {
            const newCourse = { ...course, _id: uuidv4() };
            state.courses = [...state.courses, newCourse];
            const newEnrollment = {
                _id: uuidv4(),
                user: course.currentUserId,
                course: newCourse._id,
            };
            state.enrollments = [...state.enrollments, newEnrollment];
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter(
                (course) => course._id !== courseId
            );
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c) =>
                c._id === course._id ? course : c
            );
        },
        enrollCourse: (state, { payload: enrollment }) => {
            const newEnrollment = {
                _id: uuidv4(),
                user: enrollment.currentUserId,
                course: enrollment.courseId,
            };
            state.enrollments = [...state.enrollments, newEnrollment];
        },
        unEnrollCourse: (state, { payload: enrollmentData }) => {
            state.enrollments = state.enrollments.filter(
                (enrollment) => enrollment.course !== enrollmentData.courseId &&
                    enrollment.user === enrollmentData.currentUserId
            )
        },
    },
});
export const { addNewCourse, deleteCourse, updateCourse, enrollCourse, unEnrollCourse } =
    coursesSlice.actions;
export default coursesSlice.reducer;