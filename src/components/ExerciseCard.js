import { Typography, Button, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
    return (
        <>
            <Link to={`/exercises/${exercise.id}`}>
                <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            </Link>
            <Typography >{exercise.name}</Typography>
        </>
    )
}

export default ExerciseCard