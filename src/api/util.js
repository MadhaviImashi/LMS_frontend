//all the main/common http request functions will be defined in this file
//so we can use thse functions easily when ever needed simply by passing the URL as a parameter

import axios from "../shared/axios_instance";//this is the axios instance that we created

//Utility functions
export const getRequest = async (uri) => {
    try {
        let response = await axios.get(uri);

        //hence axios are PROMISE based, always a promise will be returned when axios based functions are called
        return {
            data: response.data,
            error: null
        };
    }catch (error) {
        return {
            data: null,
            error: error
        };
    }
};

//api function to update the book details(available status)
export const putRequest = async (uri, data) => {
    try{
        let response = await axios.put(uri, data);

        return {
            data: response.data,
            error: null
        };
    }catch (error) {
        return {
            data: null,
            error: error
        };
    }
}

//delete book api function
export const deleteRequest = async (uri) => {
    try{
        let response = await axios.delete(uri);

        return {
            data: response.data,
            error: null
        };
    }catch(error) {
        return {
            data: null,
            error: error
        };
    }
}


