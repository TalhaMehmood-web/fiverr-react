import React from 'react';
import "../css/card2.css";
const Card2 = (props) => {
    let { card2img , imgsm ,cardtitle ,cardpara} = props;
  return (
    <div>
      <div className="card2">
    <div className="card2-top">
<img src={card2img} alt="" />
    </div>
    <div className="card2-btm">
        <div className="card2-btml">
<img src={imgsm} alt="" />
        </div>
        <div className="card2-btmr">
<div className="card2-btmr-top">
<b> {cardtitle} </b>
</div>
<div className="card2-btmr-btm">
   <p>{cardpara}</p> 
</div>
        </div>

    </div>
      </div>
    </div>
  );
}

export default Card2;
