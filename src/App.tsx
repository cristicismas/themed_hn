import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { URLS } from './constants/fetchUrls';

import Header from './Header';
import StoryList from './StoryList';
import StoryDetails from './StoryDetails';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/news' render={() => <StoryList fetchUrl={URLS.NEW_STORIES} />} />
          <Route exact path='/ask' render={() => <StoryList fetchUrl={URLS.ASK_STORIES} />} />
          <Route exact path='/show' render={() => <StoryList fetchUrl={URLS.SHOW_STORIES} />} />
          <Route exact path='/jobs' render={() => <StoryList fetchUrl={URLS.JOB_STORIES} />} />
          <Route exact path='/story/:id' component={StoryDetails} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/' render={() => <StoryList fetchUrl={URLS.TOP_STORIES} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
