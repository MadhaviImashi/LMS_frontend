import React, {useState, useEffect} from 'react';
import {IoReturnUpBack} from "react-icons/io5";
import { getBook } from '../../api/bookAPI';
import { Button, Container, ContainerInline, FlexRow } from '../../components/CommonComponents';
import Spinner from '../../components/Spinner';

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
                <FlexRow>
                    <ContainerInline>
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
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
                    </ContainerInline>
                </FlexRow>
            ) : (
                <Spinner />
            )
        }
        </Container>
    );
};

export default Book;
