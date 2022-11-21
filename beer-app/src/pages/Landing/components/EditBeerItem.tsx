import {
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    IconButton,
    styled,
    TextField,
    Typography
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { Beer } from '../../../models/Beer';
import * as yup from "yup";
import { Formik } from "formik";
import { memo } from 'react';


const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
}));


enum FormField {
    Name = 'name',
    Genre = 'tagline',
    Description = 'description',
}


const validateSchema = yup.object().shape({
    [FormField.Name]: yup.string().required().label('Beer name'),
    [FormField.Genre]: yup.string().required().label('Genre'),
    [FormField.Description]: yup.string().required().label('Description'),
});

interface EditBeerItemProps {
    open: boolean,
    onClose: () => void,
    beer: Partial<Beer>;
    onSave: (beer: Beer) => void;
    editable?: boolean;
}

export const EditBeerItem = memo((props: EditBeerItemProps) => {


    const formFields = [
        {name: FormField.Name, label: 'Beer name'},
        {name: FormField.Genre, label: 'Genre'},
        {name: FormField.Description, label: 'description', props: {multiline: true, rows: 4}},
    ];


    const submitHandler = (values: Beer) => {
        props.onSave(values);
    }

    return (
        <Formik
            validationSchema={validateSchema}
            initialValues={props.beer}
            enableReinitialize={true}
            onSubmit={(values, {setSubmitting}) => {
                submitHandler({...values} as Beer);
            }}>
            {({
                  handleSubmit, setFieldValue, setFieldTouched, touched, errors,
                  isValid, values, isSubmitting, submitCount
              }) => (
                <BootstrapDialog
                    onClose={props.onClose}
                    aria-labelledby="customized-dialog-title"
                    open={props.open}
                >
                    <DialogTitle>
                        <Typography variant="h6">{props.beer.id ? 'Update Beer' : 'Add a New Beer'}</Typography>
                        <IconButton
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                            aria-label="close"
                            onClick={props.onClose}
                            size="large">
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Card sx={{px: 4, py: 2}}>
                                    <img
                                        className={'beer-image-sm'}
                                        src={props.beer.image_url}
                                        alt="Beer Logo"
                                    />
                                </Card>
                            </Grid>
                            {
                                formFields.map((formField) => {
                                    return <Grid item xs={12} key={formField.name}>
                                        <FormControl
                                            variant="outlined"
                                            fullWidth>
                                            <TextField
                                                onChange={(event) => setFieldValue(formField.name, event.target.value)}
                                                required
                                                disabled={!props.editable}
                                                error={!!errors[formField.name] && (!!touched[formField.name] || submitCount > 0)}
                                                name={formField.name}
                                                label={formField.label}
                                                onBlur={() => setFieldTouched(formField.name, true, true)}
                                                helperText={(!!touched[formField.name] || submitCount > 0) && errors[formField.name]}
                                                value={values[formField.name]}
                                                {...formField.props}
                                            />
                                        </FormControl>
                                    </Grid>

                                })
                            }
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={props.onClose} sx={{mr: 3}}>
                            Cancel
                        </Button>
                        <Button type={'submit'} autoFocus variant={'contained'}
                                onClick={() => handleSubmit()}>
                            {props.beer.id ? 'Update' : 'Save'}
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            )}
        </Formik>
    )
});
