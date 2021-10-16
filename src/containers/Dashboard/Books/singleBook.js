import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import {IoReturnUpBack} from "react-icons/io5";

import { Button, Container, ContainerInline, FlexRow } from '../../../components/CommonComponents';
import Spinner from '../../../components/Spinner';

import { getBook , lendBook, returnBook} from '../../../api/bookAPI';
import BookCoverPlaceholderImage from "../../../shared/book4_image.png";
import ConfirmationDialog from "../../../components/ConfirmationDialog";
import LendDialog from "./LendDialog";
import { getTodaysDate } from "../../../shared/uitility_functions";

//override a style component to style ContainerInline style component again
const ContainerInlineTextAlignLeft = styled(ContainerInline)`
    align-items: flex-start;
`;

const H1 = styled.h1`
    text-align: left;
`;
const H2 = styled.h2`
    text-align: left;
`;

// const Book = (props) => {};
//instead of sending props directly, u can also destructure the prop into exact outcomes passed from the table when a book row is clicked as below
const Book = ({id, handleBackClick}) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showLendDialog, setShowLendDialog] = useState(false);
    const [showReturnBookConfirmation, setShowReturnBookConfirmation] = useState(false);

    const handleDelete = (confirmation) => {
        if(confirmation){
            console.log("Delete confirmed");
        }
        setShowDeleteConfirmation(false);//hide the modal anyway after confirmed or cancel the deletion
    };

    const handleLend = (confirmed, memberId) => {
        if(confirmed){
            lendBook(book.id, memberId, getTodaysDate()); //call the lendBook API
            handleBackClick();
        }
        setShowLendDialog(false);
    }

    const handleReturnBook = (confirmation) => {
        if(confirmation){
            returnBook(book.id);
            handleBackClick();
        }
        setShowReturnBookConfirmation(false);
    }

    useEffect(() => {
        setIsLoading(true);
        getBook(id)
            .then((response) => {
                if(!response.error) {
                    setBook(response.data);
                }
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [id]);

    return (
        <>
            <Container>
                <Button onClick={handleBackClick}> 
                    <IoReturnUpBack /> 
                </Button>

                {!isLoading && book !== null ? (
                        <>
                        <FlexRow>
                            <ContainerInlineTextAlignLeft>
                                <H1>{book.title}</H1>
                                <H2>{`By ${book.author}`}</H2>
                                <p>
                                    Lorem ipsum dolr sit amet, consectetur adipisicing
                                    elit, sed do eiusomod tempor incideontk ut kaldbodkr et
                                    dorlore magna dlaldiqa.
                                </p>

                                {/* now embed a javascript code again as below */}
                                {
                                    book.isAvailable ? (
                                        ""
                                    ) : (
                                        <>
                                            <h4>{`Burrowed by: ${book.burrowedMemberId}`}</h4>
                                            <h4>{`Burrowed by: ${book.burrowedDate}`}</h4>
                                        </>
                                    )
                                }
                            </ContainerInlineTextAlignLeft>
                            <ContainerInline>
                                <img
                                    src={BookCoverPlaceholderImage}
                                    alt="Book Cover Placeholder"
                                    style={{border: "1px solid black", width: "250px", height: "300px"}}
                                />
                            </ContainerInline>
                        </FlexRow>
                        <FlexRow>
                            {
                                book.isAvailable ? (
                                    <>
                                        <Button onClick={()=>setShowLendDialog(true)}> Lend </Button>
                                        <Button color="danger" onClick={()=>setShowDeleteConfirmation(true)}> Delete </Button>
                                    </>
                                ) : (
                                    <>
                                        <h4>{`Burrowed by: ${book.burrowedMemberId}`}</h4>
                                        <h4>{`Burrowed on: ${book.burrowedDate}`}</h4>
                                        <Button onClick={()=>setShowReturnBookConfirmation(true)}> Return </Button>
                                    </>
                                )
                            }                    
                        </FlexRow>
                        </>
                    ) : (
                        <Spinner />
                    )
                }
            </Container>

            <ConfirmationDialog 
                handleClose={handleDelete}
                show={showDeleteConfirmation}
                headerText="Confirm book deletion"
                detailText="Are you sure you want to delete this book? This action can't be undone."
            />
            <LendDialog
                handleClose={handleLend}
                show={showLendDialog}
            />
            <ConfirmationDialog
                handleClose={handleReturnBook}
                show={showReturnBookConfirmation}
                headerText="Confirm Returning book"
                detailText="Are you sure that this book is returned by the burrowed member?"
            />
        </>
    );
};

export default Book;
