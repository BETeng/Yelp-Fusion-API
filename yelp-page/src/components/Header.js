import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Yelp App</h1>
        </header>
    )
}

const headerStyle = {
    fontSize: '20px',
    background: 'red',
    textAlign: 'center',
    padding: '1px',
    color: 'white',
}


// const linkStyle = {
//     color: '#fff',
//     textDecoration: 'none'
// }


export default Header;
