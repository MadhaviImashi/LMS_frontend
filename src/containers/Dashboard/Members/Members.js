import React, { useState } from "react";
import Table from "../../../components/Table";
import { FluidContainer } from "../../../components/CommonComponents";
import Member from "./singleMember";


//pass a prop called bookCatalog to this function
export const Members = ({membersCatalog}) => {

    //create a State to store the ID of the selected row book(initially it should be 'null')
    const [selectedMemberId, setSelectedMemberId] = useState(null);

    const handleMemberViewBackClick = () => {
        //when user click Back btn, there shouldn't be any selected row book. so make it null now using SetSelectedBookId() method
        setSelectedMemberId(null);
    }

    const handleTableRowClick = (id) => {
        console.log(id);
        setSelectedMemberId(id);
    }
    
    return (
        selectedMemberId === null ?
            <FluidContainer>

                {/* {membersCatalog[1] && membersCatalog[1].Name 
                    ? membersCatalog[1].Name
                    : "Still loading"} */}

                <Table data={membersCatalog} handleRowClick={handleTableRowClick} instruction="Click row to view member"/>

            </FluidContainer>
        : 
            <Member id={selectedMemberId} handleBackClick={handleMemberViewBackClick} />
    );
};