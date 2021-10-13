import React, { useState } from "react";
import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";
import Book from "./singleBook";


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

    //create a State to store the ID of the selected row book(initially it should be 'null')
    const [selectedBookId, setSelectedBookId] = useState(null);

    const handleBookViewBackClick = () => {
        //when user click Back btn, there shouldn't be any selected row book. so make it null now using SetSelectedBookId() method
        setSelectedBookId(null);
    }

    const handleTableRowClick = (id) => {
        console.log(id);
        setSelectedBookId(id);

    }
    
    return (
        //table view should be displayed only if selectedBookId is = to null. Otherwise display the single book view
        selectedBookId === null ? 
            <FluidContainer>
                {/* {booksCatalog[0] && booksCatalog[0].title 
                    ? booksCatalog[0].title
                    : "Still loading"} */}

                <Table data={booksCatalog} handleRowClick={handleTableRowClick} instruction="Click row to view book"/>

            </FluidContainer>
        : 
            <Book id={selectedBookId} handleBackClick={handleBookViewBackClick} />
    );
};