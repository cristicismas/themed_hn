import React, { Component } from 'react';
import { apiCall } from './services/api';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';

import Comments from './Comments';

interface IProps extends RouteComponentProps<any> {}

interface IState {
  by: string;
  descendants: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  url: string;
}

class StoryDetails extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      by: '',
      descendants: 0,
      kids: [],
      score: 0,
      time: 0,
      title: '',
      url: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    apiCall(`item/${id}`).then(res => {
      this.setState({ ...res });
    });
  }

  render() {
    const { by, descendants, kids, score, time, title, url } = this.state;
    const commentTime = time === 0 ? new Date() : new Date(time * 1000);
    
    return (
      <div id='story-details'>
        <h2><a href={url}>{title}</a></h2>
        <div>{score} score | {descendants} comments | posted by <Link to={`profile/${by}`}>{by}</Link> <TimeAgo date={commentTime} /></div>
        <Comments comments={kids} level={0} collapsed={false} />
      </div>
    );
  }
}

export default StoryDetails;