// Importing the components for header, search and conversations in the menu component
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
    return (
        <>
            <Header />
            <Search />
            <Conversations />
        </>
    )
}

export default Menu;