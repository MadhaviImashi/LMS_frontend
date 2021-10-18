import React, { useState } from "react";
import Table from "../../../components/Table";
import { Button, Container, FluidContainer } from "../../../components/CommonComponents";
import Member from "./singleMember";
import AddEditMemberDialog from "./AddEditMemberDialog";
import { addMember } from "../../../api/memberAPI";
import { IoAddSharp } from "react-icons/io5";

//pass a prop called bookCatalog to this function
export const Members = ({membersCatalog}) => {

    //create a State to store the ID of the selected row book(initially it should be 'null')
    const [selectedMemberId, setSelectedMemberId] = useState(null);
    const [showAddMemberDialog, setShowAddMemberDialog] = useState(false);


    const handleMemberViewBackClick = () => {
        //when user click Back btn, there shouldn't be any selected row book. so make it null now using SetSelectedBookId() method
        setSelectedMemberId(null);
    }

    const handleTableRowClick = (id) => {
        console.log(id);
        setSelectedMemberId(id);
    }

    const handleAddMember = (confirmed, data) => {
        if (confirmed) {
            addMember(data)
                .then((response) => {
                    if(!response.error) {
                        console.log(response.data);
                    }
                })
                .catch((error) => {
                console.log(error);
                })
        }
        setShowAddMemberDialog(false);
    }
    
    return (
        selectedMemberId === null ?
        <>
            <FluidContainer>

                {/* {membersCatalog[1] && membersCatalog[1].Name 
                    ? membersCatalog[1].Name
                    : "Still loading"} */}
                <Container
                    flexDirection="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                >
                    <Button rounded onClick={() => setShowAddMemberDialog(true)}>
                        <IoAddSharp />
                    </Button>
                </Container>

                <Table data={membersCatalog} handleRowClick={handleTableRowClick} instruction="Click row to view member"/>

            </FluidContainer>

            <AddEditMemberDialog 
            handleClose = {handleAddMember}
            show = {showAddMemberDialog}
            headerText = "Add New member"
            detailText = "Enter below details to add."
            />
        </>
        : 
            <Member id={selectedMemberId} handleBackClick={handleMemberViewBackClick} />
    );
};