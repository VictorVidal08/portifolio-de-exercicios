import React, { Component } from 'react';

import Posts from './components/Posts';
import Selector from './components/Selector';
import RedditContext from './context/RedditContext';

class App extends Component {
  componentDidMount() {
    const { fetchPosts } = this.context;
    fetchPosts();
  }

  renderLastUpdatedAt() {
    const { selectedSubreddit, postsBySubreddit } = this.context;
    const { lastUpdated } = postsBySubreddit[selectedSubreddit];

    return (lastUpdated && (
      <span>
        {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}
      </span>
    ));
  }

  renderRefreshButton() {
    const { refreshSubreddit } = this.context;

    return (
      <button
        type="button"
        onClick={ refreshSubreddit }
      >
        Refresh
      </button>
    );
  }

  render() {
    const { selectedSubreddit, postsBySubreddit, isFetching } = this.context;
    const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
    const isEmpty = (posts.length === 0);
    if (isFetching) {
      return (<h2>Loading...</h2>);
    }
    return (
      <div>
        <Selector />
        <div>
          {this.renderLastUpdatedAt()}
          {this.renderRefreshButton()}
        </div>
        {isEmpty ? <h2>Empty.</h2> : <Posts />}
      </div>
    );
  }
}

App.contextType = RedditContext;

export default App;
