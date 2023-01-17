import { useNavigate } from "react-router-dom";
import { Button as MuiButton, Typography as MuiTypography } from "@mui/material";
import NavBar from "../ComponentsNew/NavBar";
import { AboutContainer } from "../Styles/about.styles";

const About = () => {
    const navigate = useNavigate();

    return (
        <>
            <NavBar variant="primary" />
            <AboutContainer spacing={2} alignItems="center">
                <MuiTypography variant="body1">
                    <MuiTypography display="inline" fontWeight={"bold"}>
                        KneedUp
                    </MuiTypography>{" "}
                    is a convenience application for aspirants preparing from government sites.
                </MuiTypography>
                <MuiTypography>"Our mission is to make posts from your favorite government sites accessible to you at a single stop"</MuiTypography>
                <MuiTypography>
                    Guess what 🤯you can bookmark posts and also manage sites for which you wish to be notified. Our team believes in using technology to make the life of aspirants easy. 📢 Just log
                    in to KneedUp to avail all these features for{" "}
                    <MuiTypography display="inline" fontWeight={"bold"}>
                        free
                    </MuiTypography>
                </MuiTypography>
                <MuiTypography fontWeight={"bold"}>😊Happy preparation</MuiTypography>
                <MuiButton variant="contained" onClick={() => navigate("/")}>
                    Go back to home
                </MuiButton>
            </AboutContainer>
        </>
    );
};

export default About;
