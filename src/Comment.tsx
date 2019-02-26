import React, { Component } from 'react';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';

interface IStyleProps {
  level: number;
}

const StyledComment = styled.div`
  margin-left: ${(props: IStyleProps) => {
    const { level } = props;

    if (level === 0) {
      return '10px';
    }

    return level * 50 + 'px';
  }};
`;

import Comments from './Comments';
import { Link } from 'react-router-dom';

interface IComment {
  by: string;
  id: number;
  kids: number[];
  comments: IComment[];
  parent: number;
  text: string;
  time: number;
  deleted?: boolean;
}

interface IProps {
  comment: IComment;
  level: number;
}

class Comment extends Component<IProps, object> {
  render() {
    const { comment, level } = this.props;
    // Convert unix time to js' Date.
    const commentTime = new Date(comment.time * 1000);

    return (
      <div>
        <StyledComment level={level} className='comment' id={comment.id.toString()}>
          <p
            className='comment-text'
            dangerouslySetInnerHTML={{ __html: comment.deleted ? '[deleted]' : comment.text }}
          />
          <div>by <Link to={`profile/${comment.by}`}>{comment.by}</Link> <TimeAgo date={commentTime} /></div>
        </StyledComment>
        <hr />
        <Comments comments={comment.kids ? comment.kids : []} level={level + 1} />
      </div>
    );
  }
}

export default Comment;
