import React from 'react';
import "../css/card3.css";
const Card3 = (props) => {
    let { card3img ,cardtitle ,cardpara} = props;
  return (
    <div>
    <div className="card3">
  <div className="card3-top">
<img src={card3img} alt="" />
  </div>
  <div className="card3-btm">
      <div className="card3-btmr">
<div className="card3-btmr-top">
<b> {cardtitle} </b>
</div>
<div className="card3-btmr-btm">
 <p>{cardpara}</p> 
</div>
      </div>

  </div>
    </div>
  </div>
  );
}

export default Card3;
