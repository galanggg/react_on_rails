import React, { useState} from 'react';

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <h3>
        Hello, {name}!
      </h3>
      <hr />
      <form >
        <label htmlFor="name">
          Say XXXXX to:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default HelloWorld;
