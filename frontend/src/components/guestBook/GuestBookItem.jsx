import React from 'react';
import PropTypes from 'prop-types'
import { List, ListItem } from '@material-ui/core';

import './GuestBookItem.css';

const GuestBookItem = (props) => {
  const { content, date } = props;

  return (
    <List className="guest-book-item">
      <ListItem className="guest-book-item-content">{content}</ListItem>
      <ListItem className="guest-book-item-date">{date}</ListItem>
    </List>
  );
};

GuestBookItem.propTypes = {
  content: PropTypes.string,
  date: PropTypes.string,
};

export default GuestBookItem;
