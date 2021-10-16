//all the api calls(ex: getBooks, deleteBook, ..) belongs to Book management will come in this file
//thses api calls will be used to communicate with our Backend

//each api call(ex:getBooks) use a relevant http request function(ex:getRequest) to communicate with the backend.Therefor, import those request functions
import { getRequest } from "./util";
import { putRequest } from "./util";

const BASE_URL = "/book";

export const getBooks = () => getRequest(`${BASE_URL}`);
export const getBook = (id) => getRequest(`${BASE_URL}/${id}`);

export const lendBook = (id, burrowedMemberId, burrowedDate) => putRequest(`${BASE_URL}/${id}/burrow`, {
    burrowedMemberId, 
    burrowedDate});
//parameters of request body is also mentioned inside {}