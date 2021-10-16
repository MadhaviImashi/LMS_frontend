//all the api calls(ex: getBooks, deleteBook, ..) belongs to Book management will come in this file
//thses api calls will be used to communicate with our Backend

//each api call(ex:getBooks) use a relevant http request function(ex:getRequest) to communicate with the backend.Therefor, import those request functions
import { getRequest } from "./util";

const BASE_URL = "/member";

export const getMembers = () => getRequest(`${BASE_URL}`);
export const getMember = (id) => getRequest(`${BASE_URL}/${id}`);
