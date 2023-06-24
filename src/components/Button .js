import React from 'react';
import "../css/button.css";
export default function Button (props) {
    let {buttontxt} = props;
  return (
    <div>
      <button className="uni-btn">
      <p> {buttontxt}</p>
      </button>
    </div>
  );
}
