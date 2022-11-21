import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import logo from '../images/logo.svg';

export const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={'/'}>
        <img src={logo} alt="Phew" width="15"/>
    </ButtonBase>
)
