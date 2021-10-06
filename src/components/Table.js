import styled from "styled-components";
import { capitalizeFirstLetter } from "../shared/uitility_functions"; //functio to capitalize first letter of attributes

const StyledTable = styled.table`
    border: none;
    border-collapse: separate;
    td,
    th {
        border: 1px solid;
    }
    td {
        padding: 5px 10px;
    }
    tbody tr {
        :nth-of-type(even) {
            background-color: ${(props)=>props.theme.primary.light};
        }
        :hover {
            background-color: ${(props)=>props.theme.primary.dark};
        }
    }
    thead > tr {
        background-color: ${(props)=>props.theme.primary.main};
    }
`;

//a component which accept props is written in this way
const TableMarkup = ({attributes , data}) => (
    <StyledTable>
        <colgroup>
            {attributes.map((property, index) => (
                <col key = {index} />
            ))}
        </colgroup>
        <thead>
            <tr>
                {attributes.map((attribute, index) => (
                    <th key={index}>{capitalizeFirstLetter(attribute)}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key = {index}>
                    {attributes.map((attribute, index) => (
                        <td key = {index}>{item[attribute]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </StyledTable>
);

//to export this TAbleMarckup structure as a table component
const Table = ({data}) => <TableMarkup  attributes= {Object.keys(data[0])} data= {data} />
//'data' is passed as a prop to this TableMarkup component
//then, the keys set(set of attributes of the object) OF THE 1st element(data[0]) in the 'data' ARRAY passed by the backend
//will be assigned to our 'attributes' variable 

export default Table;
