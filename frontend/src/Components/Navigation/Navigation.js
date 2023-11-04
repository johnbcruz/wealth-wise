import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
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
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: #F9F8FD;
    border: 1px solid #EAEAEA;
    border-radius: 15px;
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
            width: 75px;
            height: 75px;
            border-radius: 50%;
            object-fit: cover;
            background: #EAEAEA;
            border: 1px solid #D8D8D8;
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
        }
        h2{
            color: #2E2E70;
            font-weight: 600;
        }
        p{
            color: #b0b0b0;
            font-size: 0.9rem;
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
            margin: .8rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .3s ease-in-out;
            color: #7E7EAA;
            padding-left: 1rem;
            position: relative;
            &:hover{
                background-color: rgba(46, 46, 112, 0.05);
            }
            i{
                color: #7E7EAA;
                font-size: 1.4rem;
                transition: all .3s ease-in-out;
            }
        }
    }

    .active{
        background-color: #2E2E70;
        color: white !important;
        border-radius: 10px;
        padding: 0.3rem 1rem 0.3rem 0.3rem;
        i{
            color: white !important;
        }
        &::before{
            content: none;
        }
    }
`;

export default Navigation;
