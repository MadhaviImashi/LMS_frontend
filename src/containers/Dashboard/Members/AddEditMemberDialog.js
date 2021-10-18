import styled from "styled-components"
import React, {useState} from "react";
import { Button, Container, FlexRow, Select } from "../../../components/CommonComponents";
import Input from "../../../components/input";
import { DialogBox, Modal } from "../../../components/Modal";

const Label = styled.label`
    font-size: 0.75em;
    margin-bottom: 0.5em;
    display: block;
    alignItems="flex-start"
`;

export default function AddEditBookDialog({ isEdit, data, handleClose, show, headerText, detailText}) {

    const [firstName, setFirstName] = useState(isEdit && data ? data.firstName : "");
    const [lastName, setLastName] = useState(isEdit && data && data.lastName ? data.lastName : "");
    const [phone, setPhone] = useState(isEdit && data && data.phone ? data.phone : "");
    const [address, setAddress] = useState(isEdit && data && data.address ? data.address : "");
    const [nic, setNic] = useState(isEdit && data && data.nic ? data.nic : "");
    const [userType, setUserType] = useState(isEdit && data && data.userType ? data.userType : "");

    const clearInputs = () => {
        setFirstName("")
        setLastName("")
        setPhone("")
        setAddress("")
        setNic("")
        setUserType("")
    };

    const sendDone = () => {
        if (firstName!=="" && lastName!=="" && phone!=="" && address!=="" && nic!=="" && userType!=="") {
            handleClose(true, { firstName, lastName, phone, address, nic, userType});
            clearInputs();
        }else if (firstName === "" ) {
            window.alert (`please enter a first name to ${isEdit ? "edit." : "add."}`);
        }else if (lastName === "" ) {
            window.alert (`please enter a last name to ${isEdit ? "edit." : "add."}`);
        }else if (phone === "" ) {
            window.alert (`please enter a contact number to ${isEdit ? "edit." : "add."}`);
        }else if (address === "" ) {
            window.alert (`please enter a address to ${isEdit ? "edit." : "add."}`);
        }else if (nic === "" ) {
            window.alert (`please enter a nic to ${isEdit ? "edit." : "add."}`);
        }else {
            window.alert(`please select the user type to ${isEdit ? "edit." : "add."}`);
        }
    };

    const sendCancel = () => {
        !isEdit && clearInputs(); //inputs will be cleared only if it is not the edit dialog
        handleClose( false, null);
    };

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>{headerText}</h2>
                <p> {detailText}</p>

                <Container alignItems = "center" disableFullWidth>

                    <FlexRow changePadding>
                    <Input label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" 
                    id="firstName" name="firstName" required minLenght="1"  changeWidth/>

                    <Input label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" 
                    id="lastName" name="lastName" required minLenght="1"  changeWidth/>
                    </FlexRow>

                    <FlexRow changePadding>
                    <Input label="Contact Number" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" 
                    id="phone" name="phone" required minLenght="1" changeWidth />

                    <Input label="NIC" value={nic} onChange={(e) => setNic(e.target.value)} type="text" 
                    id="nic" name="nic" required minLenght="1" changeWidth />
                    </FlexRow>

                    <Input label="Address" value={address} onChange={(e) => setAddress(e.target.value)} type="text" 
                    id="address" name="address" required minLenght="1" />

                    <Container alignItems="flex-start">
                        <Label for="userType" >User Type</Label>
                        <Select label="User Type" id="userType" value={userType} onChange={(e) => setUserType(e.target.value)} borderColor changeWidth marginLeft>
                            <option value="School">School</option>
                            <option value="University">University</option>
                            <option value="Employed">Employed</option>
                        </Select>
                    </Container>
                </Container>

                <FlexRow>
                    <Button onClick={sendDone}>Done</Button>
                    <Button onClick={sendCancel} color="secondary">Cancel</Button>
                </FlexRow>

            </DialogBox>
        </Modal>
    );
}