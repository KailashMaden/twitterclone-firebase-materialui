import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'1313540152283725825'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kailashmaden"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://facebook.com'}
          options={{ text: 'reactjs is awesome', via: 'kailash' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
