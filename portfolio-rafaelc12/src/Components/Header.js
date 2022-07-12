import { Code, CodeOff } from '@mui/icons-material';
import styled from '@emotion/styled';

const Header = () => {

    const HeaderContainer = styled('header')`
        display: flex;
        height: 6rem;
        align-items: center;
        background-color: gray;
    `;

    return (
        <HeaderContainer>
            <Code /><h2>Rafael Chagas</h2><CodeOff />
        </HeaderContainer>
    )
}

export default Header