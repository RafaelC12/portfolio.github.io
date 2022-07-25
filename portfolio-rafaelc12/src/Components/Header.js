import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/theme'
import imgLogo from '../img/logo_RC.png'

const HeaderContainer = styled.header` 
    align-items: center;
    background-color: ${({theme}) => theme.accent};
    display: flex;
    justify-content: space-between;
    height: 6rem;
    padding: 0 1rem;
    width: 100%;
`

const LogoContainer = styled.div` 
    display: flex;
    align-items: center;
    height: 70%;
    color: ${({theme}) => theme.text};
    padding: 0 1rem;
    border-radius: 10px;
    &:hover {
        background-color: #146497;
    }
`

const LogoImg = styled.img` 
    height: 60%;
    border-radius: 10px;
    margin-right: 0.5rem;
`

const Header = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <HeaderContainer>
                <LogoContainer >
                    <LogoImg src={imgLogo} alt='Logo da portfólio' />
                    <h2>Rafael Chagas</h2>
                </LogoContainer>
                <nav>
                    
                </nav>
            </HeaderContainer>
        </ThemeProvider>
    )
}

export default Header