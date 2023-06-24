import React from 'react';
import "../css/business.css";
export default function Business(props) {
    let {businessTxt} =props;
  return (
    <div>
      <div className="business-top">
      <span> <i class="fa-regular fa-circle-check"></i></span> <p>  {businessTxt}</p>
      </div>
    </div>
  );
}
