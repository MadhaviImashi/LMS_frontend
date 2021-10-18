import styled from "styled-components";
import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {IoReturnUpBack} from "react-icons/io5";

import { Button, Container, ContainerInline, FlexRow } from '../../../components/CommonComponents';
import Spinner from '../../../components/Spinner';

import {updateMember, deleteMember } from "../../../api/memberAPI";
import MemberCoverImagePlaceholder from "../../../shared/member2_image.jpg";

import { updateMember as updateMemberStore } from "../../../store/membersSlice";
import { deleteMember as deleteMemberStore } from "../../../store/membersSlice";

import ConfirmationDialog from "../../../components/ConfirmationDialog";
import AddEditMemberDialog from "./AddEditMemberDialog";

//override a style component to style ContainerInline style component again
const ContainerInlineTextAlignLeft = styled(ContainerInline)`
    align-items: flex-start;
    margin-left: 40px;
`;

const FlexRowModified = styled(FlexRow)`
    margin-left: 35px;
`;

const H1 = styled.h1`
    text-align: left;
`;
const H3 = styled.h3`
    text-align: left;
`;

// const Book = (props) => {};
//instead of sending props directly, u can also destructure the prop into exact outcomes passed from the table when a book row is clicked as below
const Member = ({id, handleBackClick}) => {
    
    const [isLoading, setIsLoading] = useState(false);
    //const [member, setMember] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showEditMemberDialog, setShowEditMemberDialog] = useState(false);

    const membersFromRedux = useSelector((state) => state.members.value);
    console.log("members from redux", membersFromRedux);
    const member = membersFromRedux.find((element) => element.id === id);  
    const dispatch = useDispatch();


    // useEffect(() => {
    //     setIsLoading(true);
    //     getMember(id)
    //         .then((response) => {
    //             if(!response.error) {
    //                 setMember(response.data);
    //             }
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         })
    // }, [id]);

    const handleDelete = (confirmation) => {
        if (confirmation) {
          setIsLoading(true);
          deleteMember(member.id)
            .then((response) => {
              if (!response.error) {
                dispatch(deleteMemberStore(response.data));
                handleBackClick();//this state update cannot happen in an unmounted component. so removed the setIsLoadin(false) part of this promise
              }
            })
            .catch((error) => {
              console.log(error);
            })
        }
        setShowDeleteConfirmation(false); //hide the modal anyway after confirmed or cancel the deletion
      };

      const handleEditBook = (confirmed, data) => {
        if (confirmed) {
            updateMember(member.id, data)
            .then((response) => {
              if (!response.error) {
                dispatch(updateMemberStore(response.data));
              }
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }
        setShowEditMemberDialog(false);
      };

    return (
        <>
        <Container>
            <Button onClick={handleBackClick}> 
                <IoReturnUpBack /> 
            </Button>

            {!isLoading && member !== null ? (
                <>
                <FlexRow>
                    <ContainerInlineTextAlignLeft>
                        <H1>{`${member.firstName} ${member.lastName}`}</H1>
                        <H3>{`Contact Number: `}</H3><span>{`${member.phone}`}</span>
                        <H3>{`Address: `}</H3><span>{`${member.address}`}</span>
                        <H3>{`NIC: `}</H3><span>{`${member.nic}`}</span>
                        <H3>{`User type: `}</H3><span>{`${member.userType}`}</span>

                    </ContainerInlineTextAlignLeft>
                    <ContainerInline>
                        <>
                        <img
                            src={MemberCoverImagePlaceholder}
                            alt="Book Cover Placeholder"
                            style={{border: "1px solid black", width: "220px", height: "235px"}}
                        />
                        <p>
                            Lorem ipsum dolr sit amet,consectetur 
                            adipisicing
                            elit, sed doeiusomod tempor incideontkut 
                            kaldbodkr et
                            dorlore magna dlaldiqa.
                        </p>
                        </>
                    </ContainerInline>
                </FlexRow>
                <FlexRowModified>
                    {member.isAvailable ? (
                        <>
                        <Button onClick={() => setShowEditMemberDialog(true)}>Edit</Button>
                        <Button color="danger" onClick={() => setShowDeleteConfirmation(true)}> Delete</Button>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                </FlexRowModified>
                </>
                    ) : (
                        <Spinner />
                    )
                }
        </Container>

        <ConfirmationDialog
            handleClose={handleDelete}
            show={showDeleteConfirmation}
            headerText="Confirm member deletion"
            detailText="Are you sure you want to delete this member? This action can't be undone."
        />

        <AddEditMemberDialog
            isEdit={true}
            data={member}
            handleClose={handleEditBook}
            show={showEditMemberDialog}
            headerText="Edit member details"
            detailText="Edit below details and press 'Yes' to confirm update"
      />
      </>
    );
};

export default Member;
