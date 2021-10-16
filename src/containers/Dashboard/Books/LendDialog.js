import React, { useState } from "react";
import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { DialogBox, Modal } from "../../../components/Modal";

//create a functional component
export default function LendDialog({ handleClose, show}){

    const [member, setMember] = useState("");

    const sendConfirm = () => handleClose(true, member);

    const sendCancel = () => handleClose(false, null);

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>Lend book</h2>
                <p> Select a member to continue and confirm</p>
                <Select
                    id="member-select"
                    onChange={(e) => setMember(e.target.value)}
                    value={member}
                >
                    <option value="">--Please choose a member</option>
                    <option value="saman">Saman</option>
                    <option value="imashi">Imashi</option>
                    <option value="devni">Devni</option>
                    <option value="heli">Heli</option>
                </Select>
                <FlexRow>
                    <Button onClick={sendConfirm}> Confirm</Button>
                    <Button onClick={sendCancel} color="secondary"> Cancel</Button>
                </FlexRow>
            </DialogBox>
        </Modal>
    );
}