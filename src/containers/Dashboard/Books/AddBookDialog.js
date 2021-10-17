import React, {useState} from "react";
import { Button, Container, FlexRow } from "../../../components/CommonComponents";
import Input from "../../../components/input";
import { DialogBox, Modal } from "../../../components/Modal";

export default function AddBookDialog({ handleClose, show}) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const clearInputs = () => {
        setTitle("")
        setAuthor("")
    };

    const sendDone = () => {
        if (title !== "" && author !== "") {
            handleClose(true, { title, author });
            clearInputs();
        }else if (title === "" ) {
            window.alert ("please enter a title to add the book");
        }else {
            window.alert("please enter the author of the book to add.");
        }
    };

    const sendCancel = () => {
        clearInputs();
        handleClose( false, null);
    };

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>Add book</h2>
                <p> Enter the below details of the book</p>

                <Container alignItems = "center" disableFullWidth>

                    <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" 
                    id="title" name="title" required minLenght="1" />

                    <Input label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} type="text" 
                    id="author" name="author" required minLenght="1" />
                </Container>

                <FlexRow>
                    <Button onClick={sendDone}>Done</Button>
                    <Button onClick={sendCancel} color="secondary"> Cancel </Button>
                </FlexRow>

            </DialogBox>
        </Modal>
    );
}