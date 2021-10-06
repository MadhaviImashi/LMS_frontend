import React from "react";
import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";


//pass a prop called bookCatalog to this function
export const Books = ({booksCatalog}) => {
    //Add more tuples using array destructuring: 
    const updatedBooksCatalog = [
        ...booksCatalog, {
            author: "imashi Uyanahewa",
            burrowedDate: "",
            burrowedMemberId: "",
            id: "3",
            isAvailable: true,
            title: "React Development in 2021",
        },
    ];

    const handleTableRowClick = (id) => {
        console.log(id);
    }
    
    return (
        <FluidContainer>
            {/* {booksCatalog[0] && booksCatalog[0].title 
                ? booksCatalog[0].title
                : "Still loading"} */}

            <Table data={updatedBooksCatalog} handleRowClick={handleTableRowClick} instruction="Click row to view book"/>

        </FluidContainer>
    );
};