import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([ 
        {name: 'Crime and Punishment',
        auther: 'Dostoevsky',
        read: true},
        {name: 'One Hundred Years of Solitude',
        auther: 'Gabriel Garcia Marquez',
        read: false},

        {name: 'Autobiography of a Yogi',
        auther: 'Paramahansa Yogananda',
        read: false},

        {name: 'Brilliant Green',
        auther: 'Stefano Mancuso',
        read: false}
    ]);

    const addBook = (n_name, n_auther, n_read)=>{

        if( books.filter(book => book.name === n_name)[0]){
            const removedBooks = books.filter(book =>book.name !== n_name)
            console.log(removedBooks)
            setBooks([{name:n_name, auther: n_auther, read: n_read}, ...removedBooks])
            return;
        }

        setBooks([{name:n_name, auther: n_auther, read: n_read}, ...books]);
     }

     const removeBook = (name)=>{
         setBooks(books.filter(book =>book.name !== name))
     }

     const readBook=(name) => {
        const currBook = books.filter(book => book.name === name)[0];
        if(!currBook.read){
            removeBook(name)
            addBook(currBook.name,currBook.auther,true);
            
        }    
    }

    return (
        <BooksContext.Provider value={{books, addBook, removeBook, readBook}}> 
        {props.children}
        </BooksContext.Provider>
    )
}
 
export default BookContextProvider;