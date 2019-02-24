import React, { Component } from 'react';
import { apiCall } from './services/api';

import Comment from './Comment';

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
  comments: number[];
  level: number;
}

interface IState {
  comments: IComment[];
}

class Comments extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.props.comments.forEach(comment => {
      apiCall('item/' + comment).then((res: IComment) => {
        this.setState(prevState => ({
          comments: [...prevState.comments, res]
        }));
      });
    });
  }

  componentDidUpdate(prevProps: IProps) {
    const { comments } = this.props;

    if (prevProps.comments.length !== comments.length) {
      this.props.comments.forEach(comment => {
        apiCall('item/' + comment).then((res: IComment) => {
          this.setState(prevState => ({
            comments: [...prevState.comments, res]
          }));
        });
      });
    }
  }

  render() {
    const { comments } = this.state;
    const { level } = this.props;

    const commentsList = comments.map(comment => <Comment comment={comment} key={comment.id} level={level} />);

    return <div className='comments'>{commentsList}</div>;
  }
}

export default Comments;
