import React, { Component } from 'react';
import { apiCall } from './services/api';
import Story from './Story';

interface IStory {
  title: string;
  id: number;
}

interface IState {
  stories: IStory[];
}

class News extends Component<object, IState> {
  constructor(props: object) {
    super(props);

    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    // Fetches new story ids
    apiCall('newstories').then((res: number[]) => {
      const storyNumbers: number[] = res.slice(0, 20);
      
      // For every id it fetches a story
      storyNumbers.forEach((storyNumber: number) => {
        apiCall(`item/${storyNumber}`).then((res: IStory) => {
          this.setState(prevState => ({
            stories: [...prevState.stories, res]
          }));
        });
      });
    });
  }

  render() {
    const { stories } = this.state;

    const storiesList = stories.map((story: IStory) => 
      <Story title={story.title} key={story.id} />
    );

    return (
      <div id='news'>
        {storiesList}
      </div>
    );
  }
}

export default News;
