import  React,  {Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {login} from '../../components/Auth/Auth'


class Homepage extends Component {
    render() {
        return (
            <div>
                <Button color="primary" onClick={login}>Log in</Button>
                <Button color="secondary">secondary</Button>
            </div>
        )
    }
}


export default Homepage;