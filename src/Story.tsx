import React, { Component } from 'react';

interface IProps {
  title: string
};

class Story extends Component<IProps, object> {
  render() {
    const { title } = this.props;
    return (
      <div>
        {title}
      </div>
    );
  }
}

export default Story;
