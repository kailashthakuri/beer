import { memo, ReactNode } from 'react';
import { Box, Button, Typography } from '@mui/material';

export const EmptyItemsContainer = memo(({children, count, onAdd}: { children: ReactNode, count: number, onAdd: Function }) => {
    return (
        <>
            {count > 0 ? children : (
                <>
                    <Box className={'flex-column flex-center'} sx={{py: 8,backgroundColor:'#EEEFFF'}}>
                        <Typography component={'div'}>Nothing to see yet</Typography>
                        <Typography component={'div'}><Button onClick={() => onAdd()}>Click here</Button>to add first
                            beer</Typography>
                    </Box>
                </>
            )}
        </>
    )
});
