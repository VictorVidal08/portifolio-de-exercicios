import React from 'react';
import PropTypes from 'prop-types';

import getPostsBySubreddit from '../services/redditAPI';
import RedditContext from './RedditContext';

class RedditProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      postsBySubreddit: {
        frontend: {},
        reactjs: {},
      },
      selectedSubreddit: 'reactjs',
      shouldRefreshSubreddit: false,
      isFetching: false,
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    const { shouldRefreshSubreddit, selectedSubreddit } = this.state;
    const selectedSubredditChanged = prevState.selectedSubreddit !== selectedSubreddit;

    if (selectedSubredditChanged || shouldRefreshSubreddit) {
      this.fetchPosts();
    }
  }

    fetchPosts = () => {
      if (!this.shouldFetchPosts()) return;

      this.setState({
        shouldRefreshSubreddit: false,
        isFetching: true,
      });

      const { selectedSubreddit } = this.state;
      getPostsBySubreddit(selectedSubreddit)
        .then(this.handleFetchSuccess)
        .catch(this.handleFetchError);
    }

    shouldFetchPosts = () => {
      const {
        selectedSubreddit,
        postsBySubreddit,
        shouldRefreshSubreddit,
        isFetching,
      } = this.state;
      const posts = postsBySubreddit[selectedSubreddit];

      if (!posts.items) return true;
      if (isFetching) return false;
      return shouldRefreshSubreddit;
    }

    handleFetchSuccess = (json) => {
      const lastUpdated = Date.now();
      const items = json.data.children.map((child) => child.data);

      this.setState((state) => ({
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: false,
        postsBySubreddit: {
          ...state.postsBySubreddit,
          [state.selectedSubreddit]: {
            items,
            lastUpdated,
          },
        },
      }));
    }

    handleFetchError = (error) => {
      this.setState((state) => ({
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: false,
        postsBySubreddit: {
          ...state.postsBySubreddit,
          [state.selectedSubreddit]: {
            error: error.message,
            items: [],
          },
        },
      }));
    }

    handleSubredditChange = (selectedSubreddit) => this.setState({ selectedSubreddit });

    handleRefreshSubreddit = () => this.setState({ shouldRefreshSubreddit: true });

    render() {
      const { children } = this.props;
      const { selectedSubreddit, postsBySubreddit } = this.state;
      const context = {
        ...this.state,
        selectSubreddit: this.handleSubredditChange,
        fetchPosts: this.fetchPosts,
        refreshSubreddit: this.handleRefreshSubreddit,
        availableSubreddits: Object.keys(postsBySubreddit),
        posts: postsBySubreddit[selectedSubreddit].items,
      };

      return (
        <RedditContext.Provider value={ context }>
          {children}
        </RedditContext.Provider>
      );
    }
}

export default RedditProvider;

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
