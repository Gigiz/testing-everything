import React, { useState, useEffect } from 'react';

const ResultBox = ({ index }) => {

  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://fakerestapi.azurewebsites.net/api/Books');
      const books = await response.json();
      const book = books.find(book => book.ID === index);
      for(let i=0; i < 10000; i++) {
        for(let j=0; j < 1000; j++) {
        
        }
      }
      setBook(book);
    };

    fetchBooks();
  }, [setBook]);

  return <div>
    {book && <span>{book.Title} - {book.Description}</span>}
  </div>;
};

const WelcomePage = () => {

  const [time, setTime] = useState(new Date());
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  const updateTime = () => {
    setTime(new Date());
  };

  const createResultBoxes = () => {
    setBoxes(Array.from(Array(100).keys()));
  };

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();

  return <div>
    <h1>Time: {h}:{m}:{s}</h1>

    <div>
      <input type='button' value='Search' onClick={() => createResultBoxes()} />
    </div>
    <div>Result: </div>
    <div>
      {boxes.map(index => <div key={index}><ResultBox index={index} /></div>)}
    </div>
  </div>;
};

export default WelcomePage;
