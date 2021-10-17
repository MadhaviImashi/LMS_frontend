import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IoReturnUpBack } from "react-icons/io5";

import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../../components/CommonComponents";
import Spinner from "../../../components/Spinner";

import {
  getBook,
  lendBook,
  returnBook,
  deleteBook,
} from "../../../api/bookAPI";

import { updateBook } from "../../../store/booksSlice";

import BookCoverPlaceholderImage from "../../../shared/book4_image.png";
import ConfirmationDialog from "../../../components/ConfirmationDialog";
import LendDialog from "./LendDialog";
import { getTodaysDate } from "../../../shared/uitility_functions";
//import { getMember } from "../../../api/memberAPI";
import AddEditBookDialog from "./AddEditBookDialog";

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
const Book = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);
  //const [member, setMember] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showLendDialog, setShowLendDialog] = useState(false);
  const [showReturnBookConfirmation, setShowReturnBookConfirmation] =
    useState(false);
  const [showEditBookDialog, setShowEditBookDialog] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = (confirmation) => {
    if (confirmation) {
      deleteBook(book.id);
    }
    setShowDeleteConfirmation(false); //hide the modal anyway after confirmed or cancel the deletion
  };

  const handleLend = (confirmed, memberId) => {
    if (confirmed) {
      setIsLoading(true); //spinner should be displayed only if Lend is confirmed(until data is loaded)

      lendBook(book.id, memberId, getTodaysDate())
        .then((response) => {
          if (!response.error) {
            console.log(response.data);
            dispatch(updateBook(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setShowLendDialog(false);
  };

  const handleEditBook = (confirmed, data) => {
    if (confirmed) {
      console.log("confirmed edit");
    }
    setShowEditBookDialog(false);
  };

  const handleReturnBook = (confirmation) => {
    if (confirmation) {
      returnBook(book.id);
      handleBackClick();
    }
    setShowReturnBookConfirmation(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getBook(id)
      .then((response) => {
        if (!response.error) {
          setBook(response.data);
          //call the getMember() to load the member details belongs to book burrowed member using book.burowedMemberId
          //getMemberName(book.burrowedMemberId);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  // const getMemberName = (burrowedMemberId) =>{
  //     getMember(burrowedMemberId)
  //         .then((response)=>{
  //             if(!response.error){
  //                 console.log("member data", response.data);
  //                 setMember(response.data);
  //             }
  //         })
  // };

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
                  Lorem ipsum dolr sit amet, consectetur adipisicing elit, sed
                  do eiusomod tempor incideontk ut kaldbodkr et dorlore magna
                  dlaldiqa.
                </p>

                {/* now embed a javascript code again as below */}
                {book.isAvailable ? (
                  ""
                ) : (
                  <>
                    <div>
                      {/* <h4>{`Borrowed by: ${member.Name}`}</h4> */}
                      <span>{`( memberID: ${book.burrowedMemberId} )`}</span>
                    </div>
                    <h4>{`Borrowed on: ${book.burrowedDate}`}</h4>
                  </>
                )}
              </ContainerInlineTextAlignLeft>
              <ContainerInline>
                <img
                  src={BookCoverPlaceholderImage}
                  alt="Book Cover Placeholder"
                  style={{
                    border: "1px solid black",
                    width: "250px",
                    height: "300px",
                  }}
                />
              </ContainerInline>
            </FlexRow>
            <FlexRow>
              {book.isAvailable ? (
                <>
                  <Button onClick={() => setShowLendDialog(true)}>Lend</Button>
                  <Button onClick={() => setShowEditBookDialog(true)}>
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => setShowDeleteConfirmation(true)}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => setShowReturnBookConfirmation(true)}>
                    Return
                  </Button>
                </>
              )}
            </FlexRow>
          </>
        ) : (
          <Spinner />
        )}
      </Container>

      <ConfirmationDialog
        handleClose={handleDelete}
        show={showDeleteConfirmation}
        headerText="Confirm book deletion"
        detailText="Are you sure you want to delete this book? This action can't be undone."
      />
      <LendDialog handleClose={handleLend} show={showLendDialog} />
      <ConfirmationDialog
        handleClose={handleReturnBook}
        show={showReturnBookConfirmation}
        headerText="Confirm Returning book"
        detailText="Press 'Yes' to confirm return"
      />
      <AddEditBookDialog
        isEdit={true}
        data={book}
        handleClose={handleEditBook}
        show={showEditBookDialog}
        headerText="Edit Book details"
        detailText="Edit below details and press 'Yes' to confirm update"
      />
    </>
  );
};

export default Book;
