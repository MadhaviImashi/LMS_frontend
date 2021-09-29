import axios from 'axios';

const lmsAPIHost_Production = "https://api.lms.net"; //this will be used to host the project during production
const lmsAPIHost_Dev = "http://localhost:3001"; //localhost 3001 can be used during the development period to host the web app
//following code line will check the current environment
//if it recognize it as a development environment it will use the lmsAPIHost_dev. otherwise it will use lmsAPIHost_production 
const lmsAPIHost = process.env.NODE_ENV === "development" ? lmsAPIHost_Dev : lmsAPIHost_Production;;


//creating axios instance is good than using axios functions dirrectly(ex: using require())
const axiosInstance = axios.create({
    baseURL: lmsAPIHost
});

export default axiosInstance;