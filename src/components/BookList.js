import React, {useContext } from 'react';
import {Card, CardActions, CardContent, Button, Typography }from '@material-ui/core/';
import {BooksContext} from '../contexts/BooksContext'
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = ()=> {
  
      const {isLight,light,dark} =  useContext(ThemeContext)
      const {books, readBook} = useContext(BooksContext)
      let colors = isLight ? light : dark;  

    return (
        books.map(book=>{
            return(
            <div style = {{background:colors.bg}}>
            <Card className = 'bookCards' style= {{background:colors.bright}}>
            <CardContent>
              <Typography  style= {{background:colors.bright}} gutterBottom>
                {book.auther}
              </Typography>
              <Typography variant="h5" component="h2" style = {{background:colors.bright}} >
                {book.name}
              </Typography>
              <Typography   style = {{background:colors.mid}}>
                {book.read?'CONGRATULATIONS YOU READ IT':'WAITING FOR YOU TO READ IT'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"  style= {{background:colors.mid}} onClick = {(e)=>{readBook(book.name)}}> {
              book.read=== true?'Already Read yey!!':'READ'}</Button>
            </CardActions>
          </Card>
          </div>
          )
        }
      )
    )
  }        
 
export default BookList;