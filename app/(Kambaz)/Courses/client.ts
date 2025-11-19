import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const axiosWithCredentials = axios.create({ withCredentials: true });

const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;


export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
};
export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
    return data;
};
export const createCourse = async (course: { _id: string; name: string; number: string; startDate: string; endDate: string; image: string; description: string; }) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
};
export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
};
export const updateCourse = async (course: { _id: string; name: string; number: string; startDate: string; endDate: string; image: string; description: string; }) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
};
export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
        .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};
interface Module {
    _id: string;
    name: string;
    description: string;
    [key: string]: string; // To allow additional properties if needed
}

export const createModuleForCourse = async (courseId: string, module: Module) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/modules`,
        module
    );
    return response.data;
};
export const deleteModule = async (moduleId: string) => {
    const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};
export const updateModule = async (module: any) => {
    const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
    return data;
};
export const enrollCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/enroll`)
    return response.data
}
export const unEnrollCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/unenroll`)
    return response.data
}
export const fetchUserEnrollments = async() => {
    const { data } = await axiosWithCredentials.get(`${ENROLLMENTS_API}/current`)
    return data
}