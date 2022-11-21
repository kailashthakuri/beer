import useAlert from '../../hooks/useAlert';
import { Alert, Slide, Snackbar } from '@mui/material';
import { Severity } from '../../context/alertContext';

/**
 * COLOR codes can be taken form theme
 */
const BackgroundColorMapper: { [key in Severity]: string } = {
    [Severity.ERROR]: 'rgb(187, 33, 36)',
    [Severity.SUCCESS]: 'rgb(34, 187, 51)',
    [Severity.INFO]: 'rgb(91, 192, 222)',
    [Severity.WARNING]: 'rgb(240, 173, 78)'
}

const TitleMapper: { [key in Severity]: string } = {
    [Severity.ERROR]: 'Error',
    [Severity.SUCCESS]: 'Success',
    [Severity.INFO]: 'Info',
    [Severity.WARNING]: 'Warning'
}

export const GlobalMessage = () => {
    const {alert, removeAlert} = useAlert();
    const handleClose = () => {
        removeAlert();
    };

    return (
        <Snackbar
            anchorOrigin={{vertical: "top", horizontal: "right"}}
            open={alert.open}
            autoHideDuration={5000}
            TransitionComponent={(props) => <Slide {...props} direction="left"/>}
            onClose={handleClose}>
            <Alert
                onClose={() => removeAlert()}
                title={TitleMapper[alert.severity]}
                sx={{
                    borderLeft: `3.5px ${BackgroundColorMapper[alert.severity]} solid`,
                    fontSize: '15px',
                    padding: '7px 15px',
                }}
                severity={alert.severity || Severity.INFO}>{alert.message}</Alert>
        </Snackbar>
    );
}
