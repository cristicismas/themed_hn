import React, { Component } from 'react';
import styled from 'styled-components';

interface IStyleProps {
  level: number;
}

const StyledComment = styled.p`
  margin-left: ${(props: IStyleProps) => {
    const { level } = props;

    if (level === 0) {
      return '10px';
    }

    return level * 50 + 'px';
  }};
`;

import Comments from './Comments';

interface IComment {
  by: string;
  id: number;
  kids: number[];
  comments: IComment[];
  parent: number;
  text: string;
  time: number;
}

interface IProps {
  comment: IComment;
  level: number;
}

class Comment extends Component<IProps, object> {
  render() {
    const { comment, level } = this.props;

    return (
      <div>
        <StyledComment level={level} className='comment'>{comment.text}</StyledComment>
        <hr />
        <Comments comments={comment.kids ? comment.kids : []} level={level + 1} />
      </div>
    );
  }
}

export default Comment;
