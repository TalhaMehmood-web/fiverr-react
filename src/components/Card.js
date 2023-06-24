import React from 'react';
import "../css/card.css";
export default function Card(props) {
    let {SRC , CardSmTxt , CardBgTxt} = props
  return (
    <div>
<div className="card">
    <div className="heading">
        <p className='card-sm-txt'>{CardSmTxt}</p>
        <p className='card-bg-txt'><b>{CardBgTxt}</b></p>
    </div>
    <img src={SRC} alt="" />
</div>
    </div>
  );
}
