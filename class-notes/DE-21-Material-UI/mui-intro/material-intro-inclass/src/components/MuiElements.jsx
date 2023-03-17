import React from 'react'
import Typography from '@mui/material/Typography';
// or
// import { Typography } from '@mui/material';//performans açısından problemli

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
            <Typography
                variant="body1"
                align="justify"
                color="error"
                m={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate explicabo quos earum ex consequatur, inventore incidunt, rem pariatur sunt debitis. Fuga praesentium placeat neque.
            </Typography>
        </>
    );
}

export default MuiElements