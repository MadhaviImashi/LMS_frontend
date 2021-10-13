import React from "react";
//import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";


//pass a prop called bookCatalog to this function
export const Members = ({membersCatalog}) => {

    // const handleTableRowClick = (id) => {
    //     console.log(id);
    // }
    
    return (
        <FluidContainer>

            {membersCatalog[1] && membersCatalog[1].Name 
                ? membersCatalog[1].Name
                : "Still loading"}

            {/* <Table data={membersCatalog} handleRowClick={handleTableRowClick} instruction="Click row to view member"/> */}

        </FluidContainer>
    );
};