import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    assignments: assignments,
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newModule = {
                _id: uuidv4(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                due_date: assignment.due_date,
                available_date: assignment.available_date
            };
            state.assignments = [...state.assignments, newModule];
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (m) => m._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m) =>
                m._id === assignment._id ? assignment : m
            );
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((m) =>
                m._id === assignmentId ? { ...m, editing: true } : m
            );
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;