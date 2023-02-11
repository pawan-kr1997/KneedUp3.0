import React, { useState, useEffect } from "react";
import { Modal, Typography, Button, Checkbox } from "@mui/material";
import { ChecklistButton, ChecklistContainer, ChecklistItem, ChecklistTitle } from "../../Styles/checklist.styles";
import { CategoryListProps, ChecklistProps } from "../../TscTypes/TscTypes";
import { useCategoryList } from "../../Contexts/CategoryList";
import axios from "axios";
import { useIsFetching, useQueryClient, useMutation } from "react-query";
import { updateCategory } from "../../Functions/axiosFunctions";

const Checklist: React.FC<ChecklistProps> = ({ isOpen, onIsOpen }) => {
    const [news, setNews] = useState(true);
    const [president, setPresident] = useState(true);
    const [pib, setPib] = useState(true);
    const [prs, setPrs] = useState(true);
    const isFetching = useIsFetching(["categoryList"]);
    const queryClient = useQueryClient();
    const { list } = useCategoryList();

    useEffect(() => {
        if (list) {
            setNews(list.news);
            setPresident(list.president);
            setPib(list.pib);
            setPrs(list.prs);
        }
    }, [list, isOpen]);

    const { mutate: updateCategoryList } = useMutation(({ news, president, pib, prs }: CategoryListProps) => updateCategory({ news, president, pib, prs }), {
        onSuccess: (data) => {
            // console.log(data);
            queryClient.invalidateQueries(["categoryList"]);
            onIsOpen(false);
        },
        onError: (err) => {
            console.log(err);
        },
    });

    // const updateCategory = async () => {
    //     try {
    //         const response = await axios.post("/feeds/category", {
    //             News: news,
    //             President: president,
    //             Pib: pib,
    //             Prs: prs,
    //         });

    //         console.log(response.data.data);
    //         setList(response.data.data);
    //         onIsOpen(false);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

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
