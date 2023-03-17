import React from 'react'
import Typography from '@mui/material/Typography';
// or
// import { Typography } from '@mui/material';//performans açısından problemli
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const MuiElements = () => {
    return (
        <>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                color="error"
                mt={5}>
                MuiElements
            </Typography>
            <Typography variant="body1" align="justify" color="warning" m={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                cupiditate explicabo quos earum ex consequatur, inventore incidunt, rem
                pariatur sunt debitis. Fuga praesentium placeat neque.
            </Typography>
            <Typography
                variant="body1"
                align="justify"
                sx={{
                    bgcolor: "red",
                    border: "1px solid black",
                    borderRadius: "5px",
                    color: "white",
                }}
                m={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                cupiditate explicabo quos earum ex consequatur, inventore incidunt, rem
                pariatur sunt debitis. Fuga praesentium placeat neque.
            </Typography>
            <Container maxWidth="md">
                <Typography variant="body1" align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                    cupiditate explicabo quos earum ex consequatur, inventore incidunt,
                    rem pariatur sunt debitis. Fuga praesentium placeat neque.
                </Typography>
                <Button color="success" size="small" variant="outlined">
                    Button
                </Button>
                <Button color="error" size="large" variant="contained">
                    Button
                </Button>
                <Button color="warning" size="text" variant="text">
                    Button
                </Button>
                <Button color="success" size="small" variant="outlined">
                    Button
                </Button>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem", gap: 3, }}>
                    <Button color="success" size="small" variant="outlined">
                        Button
                    </Button>
                    <Button color="error" size="large" variant="contained">
                        Button
                    </Button>
                    <Button color="warning" size="text" variant="text">
                        Button
                    </Button>
                    <Button color="success" size="small" variant="outlined" sx={{ fontSize: "1.5rem", "&:hover": { bgcolor: "red" } }}>
                        Button
                    </Button>
                </Box>
                <Stack direction={{ xs: "column", sm: "row" }} justifyContent={"center"} spacing={{ xs: 1, sm: 3, md: 5 }} m={2}>

                    <Button color="success" size="small" variant="outlined">
                        Button
                    </Button>
                    <Button color="error" size="large" variant="contained">
                        Button
                    </Button>
                    <Button color="warning" size="text" variant="text">
                        Button
                    </Button>
                    <Button color="success" size="small" variant="outlined">
                        Button
                    </Button>
                </Stack>
            </Container>
        </>
    );
}

export default MuiElements
