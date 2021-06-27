import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types'
import { List, ListItem, Input, Button } from '@material-ui/core';

import './GuestBookItem.css';

const GuestBookInput = (props) => {
  const { write } = props;
  const [content, setContent] = useState('');

  const onChangeContent = useCallback(({ target }) => {
    setContent(target.value);
  }, []);

  const onSend = useCallback(() => {
    write(content);
    setContent('');
  }, [content]);

  const onEnter = useCallback((e) => {
    if (e.key !== 'Enter') {
      return;
    }
    onSend();
  }, [content]);

  return (
    <List className="guest-book-item">
      <ListItem className="guest-book-item-content">
        <Input
            className="guest-book-item-input"
            value={content}
            onChange={onChangeContent}
            onKeyPress={onEnter}
        />
      </ListItem>
      <Button variant="contained" color="primary" onClick={onSend}>
        WRITE
      </Button>
    </List>
  );
};

GuestBookInput.propTypes = {
  write: PropTypes.func,
};

export default GuestBookInput;
