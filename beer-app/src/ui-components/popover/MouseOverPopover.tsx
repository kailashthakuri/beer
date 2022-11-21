import { ReactNode, useState } from 'react';
import { Box, Popover, Typography } from '@mui/material';

export const MouseOverPopover = ({
                                     message,
                                     children,
                                     ...props
                                 }: { message: string, children: ReactNode, [key: string]: any }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Box
                {...props}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {children}
            </Box>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                    opacity:0.3
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                disableScrollLock
            >
                <Typography sx={{p: 1}}>{message}</Typography>
            </Popover>
        </>
    );
}
