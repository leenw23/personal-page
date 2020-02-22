import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

import './WorkPage.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const tileData = [
    {
        img: './images/sample_earth.jpg',
        title: 'Earth'
    },
    {
        img: './images/sample_jibo.jpg',
        title: 'Jibo'
    },
    {
        img: './images/sample_her.jpeg',
        title: 'Movie Her A'
    },
    {
        img: './images/sample_her2.jpeg',
        title: 'Movie Her B'
    },
    {
        img: './images/sample_inception.jpg',
        title: 'Inception'
    }
]

export function WorkPage() {
    const classes = useStyles();

    return (
        <div id="works" className="WorkRoot">
            <div className="WorkUpperGrid">
                <div className="WorkTitle">
                    Works
                </div>
            </div>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={4.2}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                        title={tile.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`star ${tile.title}`}>
                            <StarBorderIcon className={classes.title} />
                            </IconButton>
                        }
                        />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>

  );
}

