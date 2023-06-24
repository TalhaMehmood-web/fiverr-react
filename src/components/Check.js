import React from 'react';
import "../css/check.css"
export default function Check(props) {
    let {checkTxt, checkPara } = props;
  return (
    <div style={{marginBottom:"18px"}}>
      <div className="top">
      <span> <i class="fa-regular fa-circle-check"></i></span> <p>  {checkTxt}</p>
      </div>
      <div className="bottom">
<p>{checkPara}</p>
      </div>
    </div>
  );
}
