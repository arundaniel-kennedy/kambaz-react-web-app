import axios from "axios";
import { ParamValue } from "next/dist/server/request/params";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const axiosWithCredentials = axios.create({ withCredentials: true });

const COURSES_API = `${HTTP_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

interface AssignmentStruct {
    _id: string;
    title: string;
    course: ParamValue;
    description: string;
    points: number;
    due_date: string;
    available_date: string;
}

export const createAssignmentForCourse = async (courseId: string, module: AssignmentStruct) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/assignments`,
        module
    );
    return response.data;
};
export const deleteAssignment = async (moduleId: string) => {
    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${moduleId}`);
    return response.data;
};
export const updateAssignment = async (module: AssignmentStruct) => {
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${module._id}`, module);
    return data;
};