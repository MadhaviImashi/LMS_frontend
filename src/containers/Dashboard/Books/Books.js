import React, { useState } from "react";
import Table from "../../../components/Table";
import { Button, Container, FluidContainer } from "../../../components/CommonComponents";
import Book from "./singleBook";
import { IoAddSharp } from "react-icons/io5";
import AddBookDialog from "./AddBookDialog";
import { addBook } from "../../../api/bookAPI";


//pass a prop called bookCatalog to this function
export const Books = ({booksCatalog}) => {
    //Add more tuples using array destructuring: 
    // const updatedBooksCatalog = [
    //     ...booksCatalog, {
    //         author: "imashi Uyanahewa",
    //         burrowedDate: "",
    //         burrowedMemberId: "",
    //         id: "3",
    //         isAvailable: true,
    //         title: "React Development in 2021",
    //     },
    // ];

    const [selectedBookId, setSelectedBookId] = useState(null); //create a State to store the ID of the selected row book(initially it should be 'null')
    const [showAddBookDialog, setShowAddBookDialog] = useState(false);

    const handleBookViewBackClick = () => {
        //when user click Back btn, there shouldn't be any selected row book. so make it null now using SetSelectedBookId() method
        setSelectedBookId(null);
    }

    const handleTableRowClick = (id) => {
        console.log(id);
        setSelectedBookId(id);

    }

    const handleAddBook = (confirmed, data) => {
        if (confirmed) {
            addBook(data);
        }
        setShowAddBookDialog(false);
    }
    
    //table view should be displayed only if selectedBookId is = to null. Otherwise display the single book view
    return selectedBookId === null ? (
        <>          
                <FluidContainer>
                    {/* {booksCatalog[0] && booksCatalog[0].title 
                        ? booksCatalog[0].title
                        : "Still loading"} */}
                    <Container
                        flexDirection="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        <Button rounded onClick={() => setShowAddBookDialog(true)}>
                            <IoAddSharp />
                        </Button>
                    </Container>

                    <Table 
                        data={booksCatalog} 
                        handleRowClick={handleTableRowClick} 
                        instruction="Click row to view book"
                    />

                </FluidContainer>

                <AddBookDialog 
                    handleClose = {handleAddBook}
                    show = {showAddBookDialog}
                />
        </>
        )   :  (
                <Book id={selectedBookId} handleBackClick={handleBookViewBackClick} />
    );
};

//export default Books;