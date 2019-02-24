import React, { Component } from 'react';
import { apiCall } from './services/api';
import Story from './Story';

interface IStory {
  title: string;
  id: number;
  url: string;
  score: number;
  descendants: number;
}

interface IState {
  stories: IStory[];
}

interface IProps {
  fetchUrl: string;
}

class StoryList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    const { fetchUrl } = this.props;

    // Fetches story ids
    apiCall(fetchUrl).then((res: number[]) => {
      const storyNumbers: number[] = res.slice(0, 25);

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

  componentDidUpdate(prevProps: IProps) {
    const { fetchUrl } = this.props;

    if (this.props.fetchUrl !== prevProps.fetchUrl) {
      this.setState({ stories: [] });
      // Fetches story ids
      apiCall(fetchUrl).then((res: number[]) => {
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
  }

  render() {
    const { stories } = this.state;

    const storiesList = stories.map((story: IStory) => (
      <Story title={story.title} url={story.url} score={story.score} descendants={story.descendants} id={story.id} key={story.id} />
    ));

    return <div id='story-list'>{storiesList}</div>;
  }
}

export default StoryList;
