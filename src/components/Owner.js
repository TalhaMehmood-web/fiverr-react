import React from 'react';
import "../css/owner.css"
const Owner = (props) => {
    let {ownerimg ,orhead ,orlogo ,ortxt} = props;
  return (
    <div>
      
      <div className="owner-item">
        <div className="owner-left">
<img src={ownerimg} alt="" />
        </div>
        <div className="owner-right">
       
       <div className="ortop">
      
      <div className="ortop-left">
  <p>{orhead}</p>
      </div>
      <div className="ortop-right">
<img src={orlogo} alt="" />
      </div>
 
       </div>
       <div className="orbtm">
<p> <i> {ortxt}</i></p>
       </div>

        </div>
      </div>


    </div>
  );
}

export default Owner;
