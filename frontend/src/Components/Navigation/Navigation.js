import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import picture from '../../img/picture.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };


    return (
        <NavStyled isDarkMode={isDarkMode}>
            <div className="user-con">
                <img src={picture} alt="" />
                <div className="text">
                    <h2>Coco</h2>
                    <p>Your Dashboard</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            {/* <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                    <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
                </li>
            </div> */}
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 2rem;
    width: 300px;
    height: 100%;
    background-color: #EDFEFD;
    // border: 3px solid #000000;
    backdrop-filter: blur(4.5px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 20px;
            object-fit: cover;
            background: #FFFFFF;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
    ${({ isDarkMode }) =>
        isDarkMode &&
        css`
            background-color: #111;
            color: #fff;
            /* Add more styles for dark mode */
            /* Example: Update text color, background color, etc. */
        `}
`;

export default Navigation