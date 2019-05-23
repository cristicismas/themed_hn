import React, { Component } from 'react';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';

const StyledStory = styled.div`
  margin: 10px;

  :hover {
    background-color: #333;
  }

  p {
    margin: 2px;
    font-size: 12px;
  }
`;

interface IProps {
  title: string;
  url: string;
  score: number;
  descendants: number;
  id: number;
  by: string;
  time: number;
}

class Story extends Component<IProps, object> {
  render() {
    const { title, url, score, descendants, id, by, time } = this.props;
    const storyTime = time === 0 ? new Date() : new Date(time * 1000);

    const StoryTitle = () => {
      if (url) {
        return (
          <a href={url} className='story'>
            {title}
          </a>
        );
      } else {
        return (
          <Link to={`/story/${id}`} className='story'>
            {title}
          </Link>
        );
      }
    }

    return (
      <StyledStory className='story'>
        <StoryTitle />
        <p>
          {score} points | <Link to={`/story/${id}`}>{descendants} comments</Link> | posted by <Link to={`/profile/${by}`}>{by}</Link> <TimeAgo date={storyTime} />
        </p>
      </StyledStory>
    );
  }
}

export default Story;
