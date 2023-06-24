import React from 'react';
import "../css/service.css";
export default function Service(props) {
    let {serviceLogo , serviceTxt}= props;

    
  return (
    <div>
      <div className="service-content">
        <div className="service-logo">
<img src={serviceLogo} alt="" />
        </div>
        <div className="service-txt">
<p>{serviceTxt}</p>
        </div>

      </div>
    </div>
  );
}
