import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import './LandingPage.css';

const useStyles = makeStyles(theme => ({
    root: {
        width: 250,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#F44336',
    },
    barColorPrimary: {
      backgroundColor: '#D50000',
    },
})(LinearProgress);

export function LandingPage(props) {
    const classes = useStyles();

    return (
        <div id="landing" className="LandingRoot">
            <div className="LandingBackground">
                <div className="LandingHostText">
                    NYOUNGWOO LEE
                </div>
                <div className="LandingVisionText">
                    Empathy Beyond Intelligence
                </div>
                <div className="LandingBotText">
                    Hello I'm here
                </div>
                <div className={classes.root}>
                    <ColorLinearProgress className="LandingBotLine"/>
                </div>
                <div className="LandingQuote">
                    Inspired by movie, her.
                </div>
            </div>
        </div>
    );
}
