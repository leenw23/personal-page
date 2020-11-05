import React from 'react';
import {Link} from 'react-scroll';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
  },
  appBar: {
      backgroundColor: '#F44336',
      opacity: 0.6,
  },
  title: {
      flexGrow: 1,
      color: '#212121'
  },
}));

export function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
            <Link   className = {classes.title}
                    activeClass="active"
                    to="landing"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
            >
                <Button>Nyoungwoo</Button>
            </Link>
            <Link   activeClass="active"
                    to="timeline"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
            >
                <Button>Timeline</Button>
            </Link>
            <Link   activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
            >
                <Button>About</Button>
            </Link>
            <Link   activeClass="active"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
            >
                <Button>Contact</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
