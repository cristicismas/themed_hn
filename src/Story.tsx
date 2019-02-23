import React, { Component } from 'react';
import styled from 'styled-components';

const StyledStory = styled.div`
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
}

class Story extends Component<IProps, object> {
  render() {
    const { title, url, score, kids } = this.props;

    return (
      <StyledStory className='story'>
        <a href={url} className='story'>
          {title}
        </a>
        <p>{score} points | {kids ? kids.length : '0'} comments</p>
      </StyledStory>
    );
  }
}

export default Story;
