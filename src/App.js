import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import BookContextProvider from './contexts/BooksContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <BookContextProvider>
        <Navbar />
        <BookForm/>
        <BookList/>
        </BookContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;


