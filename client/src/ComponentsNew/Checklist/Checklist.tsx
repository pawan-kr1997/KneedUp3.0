import React, { useState } from "react";
import { Modal, Typography, Button, Checkbox } from "@mui/material";
import { ChecklistButton, ChecklistContainer, ChecklistItem, ChecklistTitle } from "../../Styles/checklist.styles";
import { ChecklistProps } from "../../TscTypes/TscTypes";

const Checklist: React.FC<ChecklistProps> = ({ isOpen, onIsOpen }) => {
    // const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal open={isOpen} onClose={() => onIsOpen(false)}>
            <ChecklistContainer>
                <ChecklistTitle>Select the sites for which you want to receive notification</ChecklistTitle>
                <ChecklistItem>
                    <Typography variant="body1">News on air</Typography>
                    <Checkbox />
                </ChecklistItem>
                <ChecklistItem>
                    <Typography variant="body1">President of India</Typography>
                    <Checkbox />
                </ChecklistItem>
                <ChecklistItem>
                    <Typography variant="body1">Press information bureau</Typography>
                    <Checkbox />
                </ChecklistItem>
                <ChecklistItem>
                    <Typography variant="body1">PRS India</Typography>
                    <Checkbox />
                </ChecklistItem>
                <Button variant="contained" sx={{ margin: "1rem 0rem" }}>
                    Update categories
                </Button>
            </ChecklistContainer>
        </Modal>
    );
};

export default Checklist;
