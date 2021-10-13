import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import {IoReturnUpBack} from "react-icons/io5";

import { Button, Container, ContainerInline, FlexRow } from '../../components/CommonComponents';
import Spinner from '../../components/Spinner';

import { getBook } from '../../api/bookAPI';
import BookCoverPlaceholderImage from "../../shared/book_image.jpg";

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
                                <Button onClick={()=>console.log("Call lend API")}> Lend </Button>
                                <Button danger onClick={()=>console.log("Call deleteBook API")}> Delete </Button>
                            </>
                        ) : (
                            <>
                                <h4>{`Burrowed by: ${book.burrowedMemberId}`}</h4>
                                <h4>{`Burrowed by: ${book.burrowedDate}`}</h4>
                                <Button onClick={()=>console.log("Call Return API")}> Return </Button>
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
    );
};

export default Book;
