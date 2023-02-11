import React, { useState, useEffect } from "react";
import { Modal, Typography, Button, Checkbox } from "@mui/material";
import { ChecklistContainer, ChecklistItem, ChecklistTitle } from "../../Styles/checklist.styles";
import { ChecklistProps } from "../../TscTypes/TscTypes";
import { useCategoryList } from "../../Contexts/CategoryList";
import { useIsFetching } from "react-query";
import { useUser } from "../../Hooks/useUser";

const Checklist: React.FC<ChecklistProps> = ({ isOpen, onIsOpen }) => {
    const [news, setNews] = useState(true);
    const [president, setPresident] = useState(true);
    const [pib, setPib] = useState(true);
    const [prs, setPrs] = useState(true);
    const isFetching = useIsFetching(["categoryList"]);
    const { list } = useCategoryList();
    const { updateCategoryList } = useUser(onIsOpen);

    useEffect(() => {
        if (list) {
            setNews(list.news);
            setPresident(list.president);
            setPib(list.pib);
            setPrs(list.prs);
        }
    }, [list, isOpen]);

    return (
        <Modal open={isOpen} onClose={() => onIsOpen(false)}>
            {isFetching ? (
                <div>loading...</div>
            ) : (
                <ChecklistContainer>
                    <ChecklistTitle>Select the sites for which you want to receive notification</ChecklistTitle>
                    <ChecklistItem>
                        <Typography variant="body1">News on air</Typography>
                        <Checkbox defaultChecked={list.news} checked={news} onChange={() => setNews((prev) => !prev)} />
                    </ChecklistItem>
                    <ChecklistItem>
                        <Typography variant="body1">President of India</Typography>
                        <Checkbox defaultChecked={list.president} checked={president} onChange={() => setPresident((prev) => !prev)} />
                    </ChecklistItem>
                    <ChecklistItem>
                        <Typography variant="body1">Press information bureau</Typography>
                        <Checkbox defaultChecked={list.pib} checked={pib} onChange={() => setPib((prev) => !prev)} />
                    </ChecklistItem>
                    <ChecklistItem>
                        <Typography variant="body1">PRS India</Typography>
                        <Checkbox defaultChecked={list.prs} checked={prs} onChange={() => setPrs((prev) => !prev)} />
                    </ChecklistItem>
                    <Button variant="contained" sx={{ margin: "1rem 0rem" }} disabled={!news && !president && !prs && !pib} onClick={() => updateCategoryList({ news, president, pib, prs })}>
                        Update categories
                    </Button>
                </ChecklistContainer>
            )}
        </Modal>
    );
};

export default Checklist;
