import { Card, CardContent, CardHeader, Divider, Grid, SxProps, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface AppMainCardProps {
    title?: string;
    headerSx?: SxProps;
    Header?:FC,
    sx?: SxProps;
    content?: boolean;
    contentSx?: SxProps;
    contentClass?: string;
    RightHeader?: FC;
    border?: boolean;

    [x: string]: any;
}

export const AppMainCard = ({
                                title,
                                headerSx,
                                Header,
                                children,
                                content=true,
                                sx,
                                border,
                                RightHeader,
                                contentSx,
                                contentClass,
                                ...props
                            }: AppMainCardProps) => {
    return (
        <Card
            {...props}
            sx={{
                border: border ? '1px solid' : 'none',
                ':hover': {
                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                },
                ...sx
            }}>
            {/* card header and action */}
            <Grid container alignItems={'center'}>
                <Grid item xs={true}>
                    {title && <CardHeader sx={{...headerSx}} title={title}/>}
                    {Header && <CardHeader sx={{...headerSx}} title={<Header/>}/>}
                </Grid>
                {RightHeader && <Grid item sx={{mr: 2.5, alignSelf: 'end'}}>
                    <RightHeader/>
                </Grid>}
            </Grid>

            {/* content & header divider */}
            {(title || Header) && <Divider/>}

            {/* card content */}
            {content && (
                <CardContent sx={contentSx} className={contentClass}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </Card>
    )
}
