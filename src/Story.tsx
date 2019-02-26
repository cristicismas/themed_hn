import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledStory = styled.div`
  margin: 10px;

  :hover {
    background-color: #ddd;
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
}

class Story extends Component<IProps, object> {
  render() {
    const { title, url, score, descendants, id, by } = this.props;

    return (
      <StyledStory className='story'>
        <a href={url} className='story'>
          {title}
        </a>
        <p>
          {score} points | <Link to={`/${id}`}>{descendants} comments</Link> | posted by <Link to={`/profile/${by}`}>{by}</Link>
        </p>
      </StyledStory>
    );
  }
}

export default Story;
