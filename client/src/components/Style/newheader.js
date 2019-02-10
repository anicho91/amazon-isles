import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { login0, login1 } from '../Auth/Auth';
import { logout } from "../Auth/Auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './nav.css';

function LoginFun(props) {
    return ( 
    <div> 
        <button className='loginBtns' onClick={login0}>Client Login</button>
        <button className='loginBtns' onClick={login1}>Provider Login</button> 
    </div>
    );
}

function LogoutFun(props) {
    return ( 
    <div> 
        <button className='loginBtns' onClick={ logout }>Logout</button>
    </div>
    );
}



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
    color: '#a51365',
    display: 'none',
  },
  navBar: {
    backgroundColor: 'white',
  },
};

class ButtonAppBar extends React.Component {
    state = {
        showing: false,
    };

    
    render() {
        const { classes } = this.props;
        let button;
        let mobilemenu;

        // if ( this.state.showing === true ) {
        //     mobilemenu = <ShowMenu />;
        // }

        if (localStorage.getItem('Loggedin') === 'true' ) {
            button = <LogoutFun />;
        } else {
            button = <LoginFun />;
        }

        return (
            <div className={classes.root}>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                <Typography variant="h6" className={classes.grow}>
                    AmazonIsles
                </Typography>
                
                { button }
                
                {/* <MobileNav /> */}



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