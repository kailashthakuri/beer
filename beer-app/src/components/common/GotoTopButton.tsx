import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FLoadingBox = ({onClick, children, isTop = false, ...props}: { [key: string]: any }) => {
    const key = isTop ? 'top' : 'bottom';
    return (
        <Box {...props}
             sx={{
                 cursor: "pointer",
                 fontSize: "1rem",
                 position: "fixed",
                 borderRadius: '50%',
                 right: "1.5rem",
                 [key]: "1.5rem",
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;",
                 padding: "10px 20px"
             }}
             height="50px"
             width="50px"
             position="fixed"
             onClick={onClick}>
            {children}
        </Box>
    )
}

export const GotoTopButton = () => {
    const onClick = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    const [show, setShow] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    }, []);
    return (
        <>
            {show && <FLoadingBox onClick={onClick}>
                <KeyboardArrowUpIcon/>
            </FLoadingBox>
            }
        </>
    )
}
