
import { React, useEffect, useState } from 'react';
import { Typography, Box, Stack, Grid, Pagination } from '@mui/material';
import { data } from '../db';
import ExerciseCard from '../components/ExerciseCard';


const Exercises = () => {
    const [exercises, setExerciser] = useState(data);
    const [currentPage, setCurretPage] = useState(1); 

    const exercisesPerPage = 6;

    const paginate = (e, value) => {
      setCurretPage(value)
      window.scrollTo(0,0)
    }
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd845a992a7msh80643cf450c17e1p13ea8djsn87c5eaa630ad',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    useEffect(() => {
        // fetch('https://exercisedb.p.rapidapi.com/exercises', options)
        //     .then(response => response.json())
        //     .then(response => setExerciser(response))
        //     .catch(err => console.error(err));

    }, []);

    const listItems = currentExercises.map((i) => <ExerciseCard exercise={i} key={i.id} />)
    return (
        <>
            <Box>
                <Typography>Exercises</Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Grid container spacing={1}>
                    {listItems}
                    </Grid>
                </Stack>
                <Stack marginTop={10} marginBottom={10} alignItems='center'>
                 {exercises.length > 6 && (<Pagination
                  count={Math.ceil(exercises.length/6)}
                  page={currentPage}
                  onChange={paginate}
                  size="large"
                  shape="rounded"
                 />)}
                </Stack>
            </Box>
        </>
    )
}

export default Exercises