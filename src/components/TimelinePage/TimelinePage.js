import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './TimelinePage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export function TimelinePage(props) {
  const classes = useStyles();
  const handleChipClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div id="timeline">
      <Timeline lineColor={'#ddd'} className="TimelineGrid">
        <TimelineItem
          key="001"
          dateText="11/2010 – Present"
          style={{ color: '#e86971' }}
        >
          <h2>Response generation using GLUCOSE Rules</h2>
          <div className={classes.root}>
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
          </div>
          <p>
            컨텍스트를 바탕으로 답변을 만드는 것도 추론의 영역에 포함될 수 있다.{"\n"}
            - GLUCOSE Rule을 답변 생성에 활용하려면 어떻게 해야할까?{"\n"}
            - context=story, 마지막 문장=X로 두고, 추론된 dimension에 따라 답변 생성을 다르게 하면 어떨까?
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="04/2009 – 11/2010"
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2 style={{ color: '#61b8ff' }}>Title, Company</h2>
          <div className={classes.root}>
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
          </div>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="11/2010 – Present"
          dateInnerStyle={{ background: '#26a69a', color: '#000' }}
          style={{ color: '#80cbc4' }}
        >
          <h2>Title, Company</h2>
          <div className={classes.root}>
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
          </div>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="08/2008 – 11/2008"
          dateInnerStyle={{ background: '#76bb7f' }}
        >
          <h2>Title, Company</h2>
          <div className={classes.root}>
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
          </div>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="08/2008 – 11/2008"
          dateInnerStyle={{ background: '#76bb7f' }}
        >
          <h2>Title, Company</h2>
          <div className={classes.root}>
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
            <Chip 
              label="thinking" 
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleChipClick}
            />
          </div>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
            est.
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
