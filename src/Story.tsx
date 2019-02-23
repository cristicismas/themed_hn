import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledStory = styled.div`
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
  kids: number[];
  id: number;
}

class Story extends Component<IProps, object> {
  render() {
    const { title, url, score, kids, id } = this.props;

    return (
      <Link to={`/${id}`}>
        <StyledStory className='story'>
          <a href={url} className='story'>
            {title}
          </a>
          <p>{score} points | {kids ? kids.length : '0'} comments</p>
        </StyledStory>
      </Link>
    );
  }
}

export default Story;
