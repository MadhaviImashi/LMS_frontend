//all the main/common http request functions will be defined in this file
//so we can use thse functions easily when ever needed simply by passing the URL as a parameter

import axios from "../shared/axios_instance";//this is the axios instance that we created

//Utility functions
export const getRequest = async (uri) => {
    try {
        let response = await axios.get(uri);

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
