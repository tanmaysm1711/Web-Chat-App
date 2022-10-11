import { useState } from 'react';

// Importing the components for header, search and conversations in the menu component
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
    const [ searchQuery, setSearchQuery ] = useState('');

    return (
        <>
            <Header />
            <Search setSearchQuery={setSearchQuery}/>
            <Conversations searchQuery={searchQuery}/>
        </>
    )
}

export default Menu;