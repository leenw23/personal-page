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
                        <Typography>Empathy beyond Intelligence</Typography>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
        // <div id="about" className="AboutRoot">
        //     <div className="AboutBackground">
        //         <div className="ProfileBlock">
        //             <div className="ProfileTitle">Nyoungwoo Lee</div>
        //         </div>
        //     </div>
        // </div>
    );
}
