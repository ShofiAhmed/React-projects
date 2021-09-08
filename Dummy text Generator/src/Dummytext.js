import React, { useState } from 'react';
import Data from './Data';

function Dummytext() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(Data.slice(0, amount));
  };
  return (
    <section>
      <h3>Create dummy text</h3>
      <form onSubmit={handleSubmit}>
        <label>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button>Generate</button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default Dummytext;