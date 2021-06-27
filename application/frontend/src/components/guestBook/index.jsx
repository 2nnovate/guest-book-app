import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import GuestBookInput from "./GuestBookInput";
import GuestBookItem from "./GuestBookItem";

import './index.css';

const GuestBook = () => {
  const [list, setList] = useState([]);

  const getList = useCallback(() => {
    axios({
      method:'get',
      url:'/api/guest-book/list',
    }).then((response) => {
      const { data } = response;
      setList(data.list);
    });
  }, []);
  useEffect(() => getList(), []);

  const writeBook = useCallback((content) => {
    axios({
      method:'post',
      url: '/api/guest-book/write',
      data: { content }
    }).then((response) => {
      getList();
    });
  }, []);


  return (
      <div className="guest-book">
        <GuestBookInput
            write={writeBook}
        />
        {list && list.map(({ id, content, date }) => (
            <GuestBookItem
                key={id}
                content={content}
                date={date}
            />
        ))}
      </div>
  );
};

export default GuestBook;

