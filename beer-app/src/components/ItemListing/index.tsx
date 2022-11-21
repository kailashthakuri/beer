import { DataStatus } from '../../models/DataStatus';
import { memo, ReactNode } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface ItemListingProps {
    status: DataStatus;
    errorMessage?: string;
    retry?: Function;
    children: ReactNode,
}

const ItemListing = memo((props: ItemListingProps) => {
    return (
        <>
            {props.children}
            {props.status === DataStatus.ERROR && (
                <>
                    <Box className={'flex-center flex-column'} sx={{py: 4}}>
                        <Typography component={'div'}
                                    sx={{color: '#FF6A74'}}>{props.errorMessage || 'Something went wrong!. Please try again later.'}</Typography>
                        {props.retry && <Typography onClick={props.retry()} component={'div'} sx={{
                            color: 'red',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}>Retry</Typography>}
                    </Box>
                </>
            )}
            {props.status === DataStatus.LOADING && (
                <>
                    <Box className={'flex-center'} sx={{py: 4}}>
                        <CircularProgress size={40} thickness={5}/>
                    </Box>
                </>
            )}
        </>
    )
});

export default ItemListing;
