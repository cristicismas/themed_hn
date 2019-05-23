import React, { Component } from 'react';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';

import Comments from './Comments';

interface IStyleProps {
  level: number;
}

const StyledComment = styled.div`
  margin: 5px;
  padding: 15px;

  :hover {
    background-color: #333;
  }

  padding-left: ${(props: IStyleProps) => {
    const { level } = props;

    if (level === 0) {
      return '10px';
    }

    return level * 50 + 'px';
  }};


  .collapse-button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: turquoise;
  }
`;


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

interface IState {
  collapsed: boolean;
}

class Comment extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  render() {
    const { comment, level } = this.props;
    const { collapsed } = this.state;
    // Convert unix time to js' Date.
    const commentTime = new Date(comment.time * 1000);

    const collapseSign = collapsed ? '+' : '-';

    return (
      <div>
        <StyledComment level={level} className='comment' id={comment.id.toString()}>
          {!collapsed ? (
            <p
              className='comment-text'
              dangerouslySetInnerHTML={{ __html: comment.deleted ? '[deleted]' : comment.text }}
              id={comment.id.toString()}
            />
          ) : null}
          <div>
            by <Link to={`profile/${comment.by}`}>{comment.by}</Link> <TimeAgo date={commentTime} />{' '}
            <button onClick={() => { this.setState({ collapsed: !this.state.collapsed }) }} className='collapse-button'>[{collapseSign}]</button>
          </div>
        </StyledComment>
        <hr />
        <Comments comments={comment.kids ? comment.kids : []} level={level + 1} collapsed={collapsed} />
      </div>
    );
  }
}

export default Comment;
