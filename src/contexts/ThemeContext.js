import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLight: true,
        light: { bright: '#ffffff', mid: '#DCDCDC', bg: '#f50057' },
        dark: { bright: '#A9A9A9', mid: '#808080', bg: '#5D0021'}
     }

     changeTheTheme = () =>{
         this.setState({isLight: !this.state.isLight});
     }

    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, changeTheTheme : this.changeTheTheme}}> 
            {this.props.children}
            </ThemeContext.Provider>
          );
    }
}
 
export default ThemeContextProvider;