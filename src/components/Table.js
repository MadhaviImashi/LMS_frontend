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

    tr > th {
        padding: 0.25em 0.5em;
    }

    tr > td {
        cursor: pointer;
    }

    caption {
        font-size: 0.9em
        padding: ${(props)=>props.theme.spacing(1)};
        font-weight: bold;
    }
`;

//a component which accept props is written in this way
const TableMarkup = ({attributes , data, handleClick, caption}) => (
    <StyledTable>
        <caption>{caption}</caption>
        <colgroup>
            {/* columns will be created according to the no of properties by iterating the 'property' */}
            {attributes.map((attribute, index) => (
                <col key = {index} />
            ))}
        </colgroup>
        <thead>
            {/* in the 1st row, column headings will be created  */}
            <tr>
                {attributes.map((attribute, index) => (
                    <th key={index}>{capitalizeFirstLetter(attribute)}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {/* table data will be pupulated here (item.id will be returned when any table row is clicked) */}
            {data.map((item, index) => (
                <tr key = {index} onClick={() => handleClick(item.id)}>
                    {attributes.map((attribute, index) => (
                        <td key = {index}>
                            { typeof item[attribute] === "boolean"
                            ?
                                item[attribute] ? "Yes" : "No"
                            :
                                item[attribute] }
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </StyledTable>
);

//to export this TAbleMarckup structure as a table component
const Table = ({data, handleRowClick, instruction}) => (
    data.length > 0 ? <TableMarkup  
        attributes= {Object.keys(data[0])} 
        data= {data} 
        handleClick= {handleRowClick}
        caption= {instruction} /> 
    : "No data to populate"
);
//'data' is passed as a prop to this TableMarkup component
//then, the keys set(set of attributes of the object) OF THE 1st element(data[0]) in the 'data' ARRAY passed by the backend
//will be assigned to our 'attributes' variable 

export default Table;
