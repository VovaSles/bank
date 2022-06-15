
import {React, useEffect, useState} from 'react';
import { Typography, Box, Stack } from '@mui/material';
import {data} from '../db';
import ExerciseCard from '../components/ExerciseCard';


const Exercises = () => {
const [exercises, setExerciser] = useState(data);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd845a992a7msh80643cf450c17e1p13ea8djsn87c5eaa630ad',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises', options)
	.then(response => response.json())
	.then(response => setExerciser(response))
	.catch(err => console.error(err));
   
  },[]);

   const listItems = exercises.map((i) => <ExerciseCard exercise={i} key={i.id}/>)
  return (
    <>
    <Box>
        <Typography>Exercises</Typography>
         
            {listItems}
         
    </Box>
    </>
  )
}

export default Exercises