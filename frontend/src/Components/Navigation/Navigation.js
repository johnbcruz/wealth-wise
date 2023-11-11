import React from 'react'
import styled from 'styled-components'
import picture from '../../img/picture.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    return (
        <NavStyled>
            <ul className="menu-items">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
            <div className="bottom-nav">
                <div className="user-con">
                    <img src={picture} alt="" />
                    <div className="text">
                        <h2>CoCo</h2>
                    </div>
                </div>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 0px 8px;
    border-right: 3px solid #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .user-con {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border: 2px solid #000000;
            border-radius: 50%;
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;

        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .5rem 0;
            cursor: pointer;

            i {
                font-size: 1.5rem;
            }
        }
    }
`;

export default Navigation;
