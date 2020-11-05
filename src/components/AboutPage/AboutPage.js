import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { createMuiTheme, responsiveFontSizes, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './AboutPage.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: '100vh',
      paddingTop: '20vh'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
        isplay: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    typography: {
        fontFamily: 'Itim'
    }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export function AboutPage(props) {
    const classes = useStyles();

    return (
        <div id="about" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                <CardMedia
                    component="img"
                    src={'./images/profile.jpeg'}
                />
                </Grid>
                <Grid item xs={2} className={classes.grid}>
                    <ThemeProvider theme={theme}>
                        <Typography>Nyoungwoo Lee</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </div>
    );
}
