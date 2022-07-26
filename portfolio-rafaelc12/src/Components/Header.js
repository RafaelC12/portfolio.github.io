import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import imgLogo from '../img/logo_RC.png'
import { goToHomePage, goToAboutPage, goToContactPage, goToPortfolioPage } from '../router/coordinator'

const HeaderContainer = styled.header` 
    align-items: center;
    background-color: ${({ theme }) => theme.accent};
    display: flex;
    justify-content: space-between;
    height: 6rem;
    padding: 0 1rem;
    width: 100%;
`

const LogoContainer = styled.div` 
    align-items: center;
    border-radius: 10px;
    color: ${({ theme }) => theme.text};
    display: flex;
    height: 70%;
    padding: 0 1rem;
    &:hover {
        background-color: #146497;
        color: white;
        cursor: pointer;
        user-select: none;
    }
`

const LogoImg = styled.img` 
    border-radius: 10px;
    height: 60%;
    margin-right: 0.5rem;
`

const NavigationBar = styled.nav` 
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: 0 1rem;
    min-width: 30%;
    a {
        align-items: center;
        color: ${({ theme }) => theme.text};
        display: flex;
        justify-content: center;
        height: 100%;
        margin-left:1rem;
        min-width: 20%;
        padding: 1rem;
        &:hover, &:focus {
            background-color: ${({ theme }) => theme.text};
            color: ${({ theme }) => theme.background};
            cursor: pointer;
            user-select: none;
        }
    }
`



const Header = () => {
    const navigate = useNavigate()
    return (
        <HeaderContainer>
            <LogoContainer onClick={() => goToHomePage(navigate)} >
                <LogoImg src={imgLogo} alt='Logo da portfólio' />
                <h2>Rafael Chagas</h2>
            </LogoContainer>
            <NavigationBar>
                <a onClick={() => goToHomePage(navigate)}>Home</a>
                <a onClick={() => goToAboutPage(navigate)}>Sobre</a>
                <a onClick={() => goToPortfolioPage(navigate)}>Portfólio</a>
                <a onClick={() => goToContactPage(navigate)}>Contato</a>
            </NavigationBar>
        </HeaderContainer>
    )
}

export default Header