import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const CrossIcon = ({onClose}: { onClose: () => void }) => {
    return (
        <IconButton
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            aria-label="close"
            onClick={onClose}
            size="large">
            <CloseIcon/>
        </IconButton>
    )
}
