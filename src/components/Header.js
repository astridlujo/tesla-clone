import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {

    const [ menuStatus, setMenuStatus ] = useState(false)

    return (
        <Container>
            <a href="#" >
                <img src="/images/logo.svg" />
            </a>

            <MenuGroup>
                <div>Model S</div>
                <div>Model 3</div>
                <div>Model X</div>
                <div>Model Y</div>
                <div>Solar Group</div>
                <div>Solar Panels</div>
            </MenuGroup>

            <RightMenu>
                <a href="#" >Shop</a>
                <a href="#" >Tesla Account</a>
                <MenuIconContainer onClick={() => setMenuStatus(true)} >
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>

            <BurgerNavigation status={menuStatus} >
                <CloseContainer onClick={() => setMenuStatus(false)} >
                    <Close />
                </CloseContainer>
                
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>

            </BurgerNavigation>

        </Container>
    )
}

export default Header;

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div {
        font-weight: 600;
        padding: 0 15px; 
        cursor: pointer;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;
    }
`

const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

`

const BurgerNavigation = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: 0.2s ease-in;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        }
    }
`

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Close = styled(CloseIcon)`
    cursor: pointer;
`