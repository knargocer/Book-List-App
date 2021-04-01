import React, { Component, useState } from 'react';
import { TextField, Grid,Container,Button,Checkbox,Typography, FormControlLabel} from '@material-ui/core';
import {BooksContext} from '../contexts/BooksContext'
import { ThemeContext } from '../contexts/ThemeContext';


class BookForm extends Component {

    render() { 

        return(
            <BooksContext.Consumer>{(BookContext)=>(
                <ThemeContext.Consumer>{(themeContext) =>{
                    const {dark, isLight,light } = themeContext;
                    let colors = isLight ? light : dark; 
    
                    return ( 
                        <Container component="main" maxWidth="m" style = {{background: colors.mid}} >
                          <Typography component="h1" variant="h5">
                            Add another book
                          </Typography>
                          <form >
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
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  variant="outlined"
                                  fullWidth
                                  id="auther"
                                  label="Auther of the book"
                                  name="auther"
                                />
                              </Grid>
                            </Grid>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              style= {{background:colors.mid}}
                            >
                              Add
                            </Button>
                          </form>
                      </Container>
                     
                     );
                }
            }
            </ThemeContext.Consumer>
            )   
        }
        </BooksContext.Consumer>
        )
    }
}
 
export default BookForm;