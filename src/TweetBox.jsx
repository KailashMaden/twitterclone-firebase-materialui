import React from 'react';
import compLogo from './img/company.jpg';

import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={compLogo} />
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        ></input>

        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
