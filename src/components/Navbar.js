import React, { Component } from 'react';
import { AppBar, Typography, FormGroup, FormControlLabel, Switch} from '@material-ui/core';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

  static contextType = ThemeContext;
  
  render() { 
    const {changeTheTheme,isLight, light, dark} = this.context;

    let colors = isLight ? light : dark; 
    return(   
      <AppBar position='absolute' style = {{background:colors.bright}}>
        <FormGroup>
        <FormControlLabel
        control={<Switch checked={isLight} onChange={changeTheTheme} aria-label="login switch" />}
        label={isLight ? 'Light' : 'Dark'}
        />
        </FormGroup>
   
        <Typography variant="h6">
         Welcome to Books List App Context Example !!
        </Typography>
    
    </AppBar>
    )
  }
}
 
 export default Navbar;
