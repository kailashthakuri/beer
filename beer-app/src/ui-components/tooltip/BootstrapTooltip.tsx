import { styled, Tooltip, tooltipClasses, Zoom } from '@mui/material';

export const BootstrapTooltip = styled(({className, children, title, ...props}: { className?: string, [key: string]: any }) => (
    <Tooltip TransitionComponent={Zoom}    title={title} children={children} {...props} arrow classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 200,
    }
}));
