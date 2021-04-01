import React, { useState, useContext } from 'react';
import { TextField, Grid,Container,Button,Checkbox,Typography, FormControlLabel} from '@material-ui/core';
import {BooksContext} from '../contexts/BooksContext'
import { ThemeContext } from '../contexts/ThemeContext';

const BookForm = () => {

    const {isLight,light,dark} =  useContext(ThemeContext)
    const {addBook} = useContext(BooksContext)
    let colors = isLight ? light : dark;  
    const [inputName, setName] = useState('');
    const [inputAuther, setAuther]  = useState('')
    const [inputRead, setRead] = useState('false')

    const handleSubmit= (e)=>{
        e.preventDefault();
        addBook(inputName, inputAuther, inputRead);   
        setAuther('');
        setName('');
        setRead('');
    } 

    return(
        <Container component="main" maxWidth="m" style = {{background: colors.mid}} >
            <Typography component="h1" variant="h5">
            Add Another book
            </Typography>
            <form  >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name of the book"
                    autoFocus
                    onChange ={(e)=>setName(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    fullWidth
                    id="auther"
                    label="Auther of the book"
                    name="auther"
                onChange ={(e)=>setAuther(e.target.value)}/>
                </Grid>
            </Grid>
            <FormControlLabel
          control={
            <Checkbox checked={inputRead} onChange={(e) => setRead(e.target.checked)} />
          }
          label="Did you read it??"
        />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                style= {{background:colors.bright}}
                onClick ={handleSubmit}
            >
            Add
            </Button>
        </form>
    </Container>
     );
}


 
export default BookForm;