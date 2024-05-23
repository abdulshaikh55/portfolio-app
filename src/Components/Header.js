import React, {useState} from "react";
import './styles/Header.css'
import CloseIcon from '@mui/icons-material/Close';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Link } from "react-router-dom";


const Header = () => {

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div className="header">
            <div className="header-logo">
                <h1>Abdulfaiz Shaikh</h1>
            </div>

            <nav>
                <ul>
                    <div className="closed">
                        <CloseIcon className="close" onClick={showMenu}>
                        </CloseIcon>
                    </div>
                    <li> <Link to='/'> <b>Home</b> </Link> </li>
                    <li> <Link to='/'> <b>About</b> </Link> </li>
                    <li> <Link to='/'> <b>Portfolio</b> </Link> </li>
                    <li> <Link to='/'> <b>Articles</b> </Link> </li>
                    <li> <Link to='/'> <b>Contact</b> </Link> </li>
                </ul>
            </nav>

            <div className="changer">
              <MenuBookOutlinedIcon className="menu" onClick={showMenu} />
            </div>
        </div>
    )
}

export default Header