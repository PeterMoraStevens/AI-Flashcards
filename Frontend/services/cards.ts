import axios from "axios";
const baseURL = '/';

type getQuizesParam = {
    quizNum: string,
}

const getQuizes = ({quizNum}:getQuizesParam) => {
    const req = axios.get(`${baseURL}/${quizNum}`)
    return req
}



export default { getQuizes }