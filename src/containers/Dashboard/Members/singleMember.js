import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import {IoReturnUpBack} from "react-icons/io5";

import { Button, Container, ContainerInline, FlexRow } from '../../../components/CommonComponents';
import Spinner from '../../../components/Spinner';

import { getMember } from "../../../api/memberAPI";
import MemberCoverImagePlaceholder from "../../../shared/member2_image.jpg";

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
const Member = ({id, handleBackClick}) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [member, setMember] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getMember(id)
            .then((response) => {
                if(!response.error) {
                    setMember(response.data);
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

            {!isLoading && member !== null ? (
                <>
                <FlexRow>
                    <ContainerInlineTextAlignLeft>
                        <H1>{`${member.Name}`}</H1>
                        <H2>{`Phone:  ${member.Phone}`}</H2>
                        <p>
                            Lorem ipsum dolr sit amet, consectetur adipisicing
                            elit, sed do eiusomod tempor incideontk ut kaldbodkr et
                            dorlore magna dlaldiqa.
                        </p>

                    </ContainerInlineTextAlignLeft>
                    <ContainerInline>
                        <img
                            src={MemberCoverImagePlaceholder}
                            alt="Book Cover Placeholder"
                            style={{border: "1px solid black", width: "220px", height: "235px"}}
                        />
                    </ContainerInline>
                </FlexRow>
                </>
                    ) : (
                        <Spinner />
                    )
                }
        </Container>
    );
};

export default Member;
