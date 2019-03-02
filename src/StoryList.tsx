import React, { Component } from 'react';
import { apiCall } from './services/api';
import Story from './Story';
import { DEFAULTS } from './constants/defaults';

interface IStory {
  title: string;
  id: number;
  url: string;
  score: number;
  descendants: number;
  by: string;
  time: number;
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
      // For every id it fetches a story
      res.forEach((storyNumber: number) => {
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
        // For every id it fetches a story
        res.forEach((storyNumber: number) => {
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
    const currentPageNumber = 0;
    const startIndex = DEFAULTS.STORIES_PER_PAGE * currentPageNumber;
    const endIndex = startIndex + DEFAULTS.STORIES_PER_PAGE;

    const storiesForPage = stories.slice(startIndex, endIndex);

    const storiesList = storiesForPage.map((story: IStory) => (
      <Story {...story} key={story.id} />
    ));

    return <div id='story-list'>{storiesList}</div>;
  }
}

export default StoryList;
