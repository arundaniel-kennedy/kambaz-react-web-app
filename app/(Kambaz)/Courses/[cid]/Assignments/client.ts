import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const axiosWithCredentials = axios.create({ withCredentials: true });

const COURSES_API = `${HTTP_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};
export const createAssignmentForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        module
    );
    return response.data;
};
export const deleteAssignment = async (moduleId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${moduleId}`);
    return response.data;
};
export const updateAssignment = async (module: any) => {
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${module._id}`, module);
    return data;
};