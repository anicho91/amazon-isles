import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { login0, login1 } from '../Auth/Auth'
import './nav.css'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: '#a51365',
    fontFamily: 'Alex Brush, serif', 
    fontSize: '40px'
  },
  menuButton: {
    // marginRight: -10,
    color: '#a51365',
  },
  navBar: {
    backgroundColor: 'white',
  },
};

class ButtonAppBar extends React.Component {
    state = {
        auth: false
    };
    
    render() {
        const { classes } = this.props;
        const { auth } = this.state.auth;
  
        return (
            <div className={classes.root}>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                <Typography variant="h6" className={classes.grow}>
                    AmazonIsles
                </Typography>
                
                <button className='loginBtns' onClick={login0}>Client Login</button>
                <button className='loginBtns' onClick={login1}>Provider Login</button>
                
                {/* <IconButton className={classes.menuButton} aria-label="Menu">
                    <MenuIcon />
                </IconButton> */}
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);