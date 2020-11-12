import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './TimelineContent.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(0.5),
      fontSize: '0.7rem'
    },
  },
}));

export function TimelineContent(props) {
  const classes = useStyles();

  const timeline_data = [
    {
      key: 0,
      date: '2020 04.',
      title: 'Supporting an Iterative Conversation Design Process',
      type: 'publication',
      chips: [
        {
          key: 0,
          label: 'CHI',
          color: '#fbe9e7'
        },
        {
          key: 1,
          label: 'LBW',
          color: '#f3e5f5'
        },
        {
          key: 2,
          label: 'Poster',
          color: '#e8eaf6'
        }
      ],
      authors: [
        {
          key: 0,
          label: 'Yoonseo Choi',
        },
        {
          key: 1,
          label: 'Hyungyu Shin',
        },
        {
          key: 2,
          label: 'Toni-Jan Keith Monserrati',
        },
        {
          key: 3,
          label: 'Nyoungwoo Lee',
        },
        {
          key: 4,
          label: 'Jeongeon Park',
        },
        {
          key: 5,
          label: 'Juho Kim',
        }
      ],
      link: 'https://dl.acm.org/doi/abs/10.1145/3334480.3382951',
      contents: 'Conversation design is an essential step in building a chatbot. Much like visual user interface design,' + 
      'conversation design benefits from prototyping and user testing to allow for conversation exploration and improvement.' + 
      'However, it can be overwhelming to quickly iterate on the conversation design as the iterative process requires not only' + 
      ' designing a conversation but also building and testing a working chatbot equipped with the conversation. We developed ProtoChat,' + 
      ' a prototype system that supports an iterative conversation design by allowing designers to (1) prototype conversations, (2) test the' + 
      ' conversations with the crowd, and (3) review and analyze the crowdsourced conversation data. Results of an exploratory study with four' + 
      ' conversation designers show that the designers successfully iterated on their conversation design by reviewing how the crowd followed the' + 
      ' conversation, which provided insights into concrete action items for improving their conversation design.',
    },
    {
      key: 1,
      date: '2020 07.',
      title: 'Leveraging the Crowd to Support the Conversation Design Process',
      type: 'publication',
      chips: [
        {
          key: 0,
          label: 'CUI',
          color: '#fbe9e7'
        },
        {
          key: 1,
          label: 'Poster',
          color: '#e8eaf6'
        }
      ],
      authors: [
        {
          key: 0,
          label: 'Yoonseo Choi',
        },
        {
          key: 1,
          label: 'Hyungyu Shin',
        },
        {
          key: 2,
          label: 'Toni-Jan Keith Monserrati',
        },
        {
          key: 3,
          label: 'Nyoungwoo Lee',
        },
        {
          key: 4,
          label: 'Jeongeon Park',
        },
        {
          key: 5,
          label: 'Juho Kim',
        }
      ],
      link: 'https://dl.acm.org/doi/abs/10.1145/3405755.3406155',
      contents: 'Building a chatbot with human-like conversation capabilities is essential for users to feel more natural in task completion.' + 
      ' Many designers try to collect human conversation data and apply them into a chatbot conversation, aiming that it could work like a human conversation.' + 
      ' To support conversation design, we propose the idea of inviting the crowd into the design process, where crowd workers contribute to improving the designed conversation.' + 
      ' To explore this idea, we developed ProtoChat, a prototype system that supports a conversation design process by (1) allowing the crowd to actively suggest new utterances' + 
      ' based on designers pre-written design and (2) visually representing crowdsourced conversation data so that designers can analyze and improve their conversation design.' + 
      ' Results of an exploratory study indicated that the crowd is helpful in providing insights and ideas as designers explore the design space.',
    },
    {
      key: 2,
      date: '2020 08.',
      title: 'ProtoChat: Supporting the Conversation Design Process with Crowd Feedback',
      type: 'publication',
      chips: [
        {
          key: 0,
          label: 'CSCW',
          color: '#fbe9e7'
        }
      ],
      authors: [
        {
          key: 0,
          label: 'Yoonseo Choi',
        },
        {
          key: 1,
          label: 'Toni-Jan Keith Monserrati',
        },
        {
          key: 2,
          label: 'Jeongeon Park',
        },
        {
          key: 3,
          label: 'Hyungyu Shin',
        },
        {
          key: 4,
          label: 'Nyoungwoo Lee',
        },
        {
          key: 5,
          label: 'Juho Kim',
        }
      ],
      link: 'https://dl.acm.org/doi/abs/10.1145/3406865.3418568',
      contents: 'Conversation designers use iterative design to create, test, and improve conversation flows. While it is possible to iterate conversation design' + 
      ' with existing chatbot prototyping tools, challenges remain such as recruiting participants and collecting structured feedback on specific conversational components,' + 
      ' hindering rapid iterations, and making informed design decisions. To address these limitations, we introduce ProtoChat, a crowd-powered design tool built to support' + 
      ' the iterative process of conversation design for a chatbot. ProtoChat enables rapid testing with the crowd and guiding the crowd workers to provide granular feedback' + 
      ' on specific points of conversation.',
    },
    {
      key: 3,
      date: '2020 11.10.',
      title: 'Response generation using GLUCOSE Rules',
      type: 'experience',
      chips: [
        {
          key: 0,
          label: 'experience',
          color: '#e8f5e9'
        }],
      contents: '컨텍스트를 바탕으로 답변을 만드는 것도 추론의 영역에 포함될 수 있다.\n- GLUCOSE Rule을 답변 생성에 활용하려면 어떻게 해야할까?\n- context=story, 마지막 문장=X로 두고, 추론된 dimension에 따라 답변 생성을 다르게 하면 어떨까?',
    },
    {
      key: 4,
      date: '2020 11.10.',
      title: 'Response generation using GLUCOSE Rules',
      type: 'experience',
      chips: [
        {
          key: 0,
          label: 'experience',
          color: '#e8f5e9'
        }],
      contents: '컨텍스트를 바탕으로 답변을 만드는 것도 추론의 영역에 포함될 수 있다.\n- GLUCOSE Rule을 답변 생성에 활용하려면 어떻게 해야할까?\n- context=story, 마지막 문장=X로 두고, 추론된 dimension에 따라 답변 생성을 다르게 하면 어떨까?',
    },
    {
      key: 5,
      date: '2020 11.10.',
      title: 'Response generation using GLUCOSE Rules',
      type: 'experience',
      chips: [
        {
          key: 0,
          label: 'experience',
          color: '#e8f5e9'
        },
        {
          key: 1,
          label: 'publication',
          color: '#e1f5fe'
        }],
      contents: '컨텍스트를 바탕으로 답변을 만드는 것도 추론의 영역에 포함될 수 있다.\n- GLUCOSE Rule을 답변 생성에 활용하려면 어떻게 해야할까?\n- context=story, 마지막 문장=X로 두고, 추론된 dimension에 따라 답변 생성을 다르게 하면 어떨까?',
    }
  ]

  const handleChipClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div id="timeline">
      <Timeline lineColor={'#ddd'} className="TimelineGrid">
        {
          timeline_data.slice(0).reverse().map(post =>
            props.filter === ""
            ? <TimelineItem
                key={post.key}
                dateComponent={(
                  <div className="dateComponent">
                    {post.date}
                  </div>
                )}
              >
                {
                  post.link
                  ? <a rel="noopener noreferrer" href={post.link} target="_blank"><h2>{post.title}</h2></a>
                  : <h2>{post.title}</h2>
                }
                <div className={classes.root}>
                  {
                    post.chips.map(chip =>
                      <Chip 
                        key={chip.key}
                        label={chip.label} 
                        onClick={handleChipClick}
                        style={{backgroundColor : chip.color}}
                      />
                    )
                  }
                </div>
                { post.authors
                  ? <div className={classes.root}>
                      {
                        post.authors.map(author =>
                        <Chip 
                          key={author.key}
                          label={author.label} 
                        />)
                      }
                    </div>
                  : null
                }
                <p>{post.contents}</p>
              </TimelineItem>
            : post.type === props.filter
              ? <TimelineItem
                  key={post.key}
                  dateComponent={(
                    <div className="dateComponent">
                      {post.date}
                    </div>
                  )}
                >
                  {
                    post.link
                    ? <a rel="noopener noreferrer" href={post.link} target="_blank"><h2>{post.title}</h2></a>
                    : <h2>{post.title}</h2>
                  }
                  <div className={classes.root}>
                    {
                      post.chips.map(chip =>
                        <Chip 
                          key={chip.key}
                          label={chip.label} 
                          onClick={handleChipClick}
                          style={{backgroundColor : chip.color}}
                        />
                      )
                    }
                  </div>
                  { post.authors
                  ? <div className={classes.root}>
                      {
                        post.authors.map(author =>
                        <Chip 
                          key={author.key}
                          label={author.label} 
                        />)
                      }
                    </div>
                  : null
                  }
                  <p>{post.contents}</p>
                </TimelineItem>
              : null
          )
        }
      </Timeline>
    </div>
  );
}
