import React, { useEffect, useState } from "react";
import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { DialogBox, Modal } from "../../../components/Modal";
import { getMembers } from "../../../api/memberAPI";
import Spinner from "../../../components/Spinner";

//create a functional component
export default function LendDialog({ handleClose, show}){

    const [member, setMember] = useState("");//store the member selected from the Dropdown

    const [isLoading, setIsLoading] = useState(false);
    const [members, setMembers] = useState([]);//store members retrieved from the backend

    const sendConfirm = () => {
        if(member!==""){
            handleClose(true, member);
        }
        else{
            window.alert("please select a member first");
        }
    };

    const sendCancel = () => handleClose(false, null);

    useEffect(()=>{
        setIsLoading(true);
        //execute api call function
        getMembers()
            //execute if axios promise is fullfilled
            .then((response)=>{
                if(!response.error){
                    console.log(response.data);
                    setMembers(response.data);
                }
            })
            //execute if promise has catched an error
            .catch((error)=>{
                console.log(error);
            })
            //execute at the end of promise to close the sideEffect(cuz, data loading is completed at this point)
            .finally(() => {
                setIsLoading(false);
            })
    }, [])       

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>Lend book</h2>
                <p> Select a member to continue and confirm</p>

                {!isLoading && members !== null ? (
                    <>
                        <Select
                            id="member-select"
                            onChange={(e) => setMember(e.target.value)}
                            value={member}
                        >
                            <option value="">--Please select a member</option>
                            {members.map((member, index) => (
                                <option key={index} value={member.id}> {member.Name} </option>
                            ))}
                        </Select>
                        <FlexRow>
                            <Button onClick={sendConfirm}> Confirm</Button>
                            <Button onClick={sendCancel} color="secondary"> Cancel</Button>
                        </FlexRow>
                    </>
                ) : (
                    <Spinner />
                )
                }
            </DialogBox>
        </Modal>
    );
}