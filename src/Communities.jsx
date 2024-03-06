import React from 'react';

function Communities({ Communities, selectCommunity }) {
  return (
    <div className="left-bar">
      <ul>
        {Communities.map((community, index) => (
          <li key={index} onClick={() => selectCommunity(community)} style={{ cursor: 'pointer' }}>{community}</li>
        ))}
      </ul>
    </div>
  );
}

export default Communities;
