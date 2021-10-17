import React, {useState} from "react";
import { Button, Container, FlexRow } from "../../../components/CommonComponents";
import Input from "../../../components/input";
import { DialogBox, Modal } from "../../../components/Modal";

export default function AddEditBookDialog({ isEdit, data, handleClose, show, headerText, detailText}) {

    const [title, setTitle] = useState(isEdit && data ? data.title : "");
    const [author, setAuthor] = useState(isEdit && data && data.author ? data.author : "");

    const clearInputs = () => {
        setTitle("")
        setAuthor("")
    };

    const sendDone = () => {
        if (title !== "" && author !== "") {
            handleClose(true, { title, author });
            clearInputs();
        }else if (title === "" ) {
            window.alert (`please enter a title to ${isEdit ? "edit." : "add."}`);
        }else {
            window.alert(`please enter the author of the book to ${isEdit ? "edit." : "add."}`);
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

                    <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" 
                    id="title" name="title" required minLenght="1" />

                    <Input label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} type="text" 
                    id="author" name="author" required minLenght="1" />
                </Container>

                <FlexRow>
                    <Button onClick={sendDone}>Done</Button>
                    <Button onClick={sendCancel} color="secondary">Cancel</Button>
                </FlexRow>

            </DialogBox>
        </Modal>
    );
}