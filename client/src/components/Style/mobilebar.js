import React from 'react'

const MobileNav = (props) => (
    
    <div>
        <button className='dropdownmenu' onClick={ this.setState({ showing: true }) }><FontAwesomeIcon icon={faBars} /></button>
    </div>
    
)

ShowMenu = () => {
    

    return (
        <div className='dropdownnav'>
           <nav>
               <Link to={`/`} > Home </Link>
               <Link to={`/client`} > Profile </Link>
               <Link to={`/fashion`} > Design </Link>
           </nav>
        </div>
    )
}