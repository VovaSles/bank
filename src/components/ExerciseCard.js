import { Typography, Grid, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
    return (
        <>
            <Grid item xs={12} md={4}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Link to={`/exercises/${exercise.id}`}>
                            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                        </Link>
                        <Typography >{exercise.name}</Typography>
                    </Stack>
            </Grid>
        </>
    )
}

export default ExerciseCard