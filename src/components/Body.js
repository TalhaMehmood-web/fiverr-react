import React from 'react';
import Navbar from './Navbar';
import Check from './Check';
import "../css/trust.css";
import Card from './Card';
import Service from './Service';
import Button from './Button ';
import Business from './Business';
import Owner from './Owner';
import Card2 from './Card2';
import Card3 from './Card3';

export default function Body() {


const pre = ()=>{
  let box = document.querySelector(".card-ul");
  let width = box.clientWidth;
console.log(width);
  box.scrollLeft = box.scrollLeft - width;


}
const next = ()=>{
  let box = document.querySelector(".card-ul");
  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft + width;
}
const previous =()=>{
 let slide = document.querySelector(".owner-ul");
 let totalWidth = slide.clientWidth;
 console.log(totalWidth);
 slide.scrollLeft -= totalWidth;


}
const forward =()=>{
  let slide = document.querySelector(".owner-ul");
  let totalWidth = slide.clientWidth;
  slide.scrollLeft += totalWidth;
}
const workLeft =()=>{
let  slideLeft = document.querySelector(".work-ul");
let workWidth = slideLeft.clientWidth;
slideLeft.scrollLeft -= workWidth;   

}
const workRight =()=>{
  let  slideRight = document.querySelector(".work-ul");
  let workWidth = slideRight.clientWidth;
  slideRight.scrollLeft += workWidth;
}
  return (
    <>

    <div className="body">
    <section>
      <Navbar/>
      <div className='home'>
      <div className='home-content'>
      <div className="home-top home-margin">
        <p>Find the right <i className='italic'>freelance <br /> service,</i> right away </p>
      </div>
      <div className="home-mid home-margin">
      <div className="home-input"><input type="text"  placeholder='Search for any services...'/></div>
      <div className="mg-glass"><i class="fa-solid fa-magnifying-glass"></i></div>
      </div>
      <div className="home-btm home-margin">
        <ul>
            <li className='home-txt'>Popular :</li>
            <li><button className='home-btn'>Website Design</button></li>
            <li><button className='home-btn'>WordPress</button></li>
            <li><button className='home-btn'>Logo Design</button></li>
            <li><button className='home-btn'>AI Services</button></li>
        </ul>
      </div>
      </div>
      </div>
      </section>
</div>

<section>
<div className="trust">
          <ul>
            <li className='trust-txt'>Trusted by:</li>
            <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png" alt="" /></li>
            <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png" alt="" /></li>
            <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png" alt="" /></li>
            <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png" alt="" /></li>
            <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png" alt="" /></li>
          </ul>
        </div>
</section>
<section>
   <div className="cards">
    <div className="cards-content">
      <div className="cards-title">
      <h1>Popular Services</h1>
      </div>
      <div className="card-ul">  
      
      <div className="card-item"> <Card SRC= "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png"
        CardSmTxt = "Add talent to AI" CardBgTxt = "AI Artist"/>  </div>
    <div className="card-item"> <Card SRC ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
     CardSmTxt = "Build Your Brand" CardBgTxt = "Logo Design"/>  </div>
    <div className="card-item"> <Card SRC ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
     CardSmTxt = "Customrize your Site " CardBgTxt = "WordPress"/>  </div>
    <div className="card-item"> <Card SRC ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
     CardSmTxt = "Share your message" CardBgTxt = "Voice Over"/>  </div>
    <div className="card-item"> <Card SRC ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" 
     CardSmTxt = "Engage your auidence" CardBgTxt = "Void Explainer"/>  </div>


    <div className="card-item "  > <Card SRC="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
    CardSmTxt = "Read more customers" CardBgTxt ="Social Media"/>  </div>
    <div className="card-item"> <Card SRC ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png" CardSmTxt ="Unlock growth online" CardBgTxt="SEO"/>  </div>
    <div className="card-item"> <Card SRC ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" CardSmTxt="Color your dreams" CardBgTxt="Illustration"/>  </div>
    <div className="card-item"> <Card SRC ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png" CardSmTxt="Go global" CardBgTxt="Translation"/>  </div>
    <div className="card-item"> <Card SRC ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png" CardSmTxt="Learn your busniness" CardBgTxt="Data Entry"/> </div>
    <div className="card-item"><Card SRC ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png" CardSmTxt="Showcase your story" CardBgTxt="Book Covers"/>  </div>

    </div>
   <div className="cards-btn">
   <div> <button className='pre' onClick={pre} >   <i class="fa-solid fa-chevron-left"></i></button></div>
   <div> <button className='next'  onClick={next} ><i class="fa-solid fa-chevron-right"></i></button></div>
   </div>
    </div>
   </div>
</section>
<section>
  <div className="check-all">
<div className="check-list">

  <div className="check-left">
  <h1 style={{color:"#404145" , fontSize:"34px" , marginBottom:"24px"}} >The best part? Everything.</h1>
<Check checkTxt="Stick to your budget"  checkPara="Find the right service for every price point. No hourly rates, just project-based pricing." />
<Check checkTxt="Get quality work done quickly" checkPara="Hand your project over to a talented freelancer in minutes, get long-lasting results."/>
<Check checkTxt="Pay when you're happy" checkPara="Upfront quotes mean no surprises. Payments only get released when you approve."/>
<Check checkTxt="Count on 24/7 support" checkPara="Our round-the-clock support team is available to help anytime, anywhere."/>
  </div>
  <div className="check-right">
  <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="" />
  </div>
</div>
</div>
</section>
<section>
  <div className="service-all"> 
   <div className="service">
    <div className="service-head">
      <p>You need it, we've got it</p>
    </div>
    <div className="services">
      <div className="service-top">
      <Service serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg" serviceTxt ="Graphics & Design"/>
     <div className="margin" style={{marginLeft:"52px"}} > <Service  serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg" serviceTxt ="Digital Marketing"/></div>
      <Service serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg" serviceTxt ="Writing & Translation"/>
      <Service serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg" serviceTxt ="Video & Animation"/>
       <Service serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg" serviceTxt ="Music & Audio"/>
      </div>
      <div className="service-btm">
      <Service serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg" serviceTxt ="Programming & Tech"/>
      <Service serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg" serviceTxt ="Business"/>
      <Service serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg" serviceTxt ="Lifestyle"/>
      <Service serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg" serviceTxt ="Data"/>
      <Service serviceLogo = "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg" serviceTxt ="Photography
"/>
      </div>
    </div>
  </div>
  </div>

</section>
<section>
<div className="businee">
<div className="buniess-left">
<div className="businee-logo">
<b style={{fontWeight : "800"}} > fiverr </b> business.
</div>
<div className="businee-head">
<b> A solution built for <i> business</i></b>
</div>
<div className="businee-para">
Upgrade to a curated experience to access vetted <br /> talent and exclusive tools
</div>
<div className="business-txt">
<Business  businessTxt ="Talent matching" />
<Business  businessTxt ="Dedicated account management" />
<Business  businessTxt ="Team collaboration tools" />
<Business  businessTxt ="Business payment solutions" />
</div>

<div className="businee-btn" style={{marginTop:"5rem"}}>
  <Button buttontxt  = "Explore fiverr busniess"/>
  </div>

  </div>
  <div className="businee-right" >
<img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />

  </div>
</div>
</section>
<section>
  <div className="owner">
    <div className="owner-content">
    <div className="owner-ul">
    <div className="owner-list">   <Owner  ownerimg="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"  orhead="Tim and Dan Joo, Co-Founders" orlogo="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/haerfest-logo-x2.934ab63.png" ortxt="When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."/></div>
<div className="owner-list">  <Owner  ownerimg="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"  orhead="Brighid Gannon (DNP, PMHNP-BC), Co-Founder" orlogo="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lavender-logo-x2.3fff9e7.png" ortxt="We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."/></div>
<div className="owner-list">   <Owner  ownerimg="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg"  orhead="Caitlin Tormey, Chief Commercial Officer" orlogo="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png" ortxt="We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."/></div>
<div className="owner-list"><Owner  ownerimg="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"  orhead="Kay Kim, Co-Founder" orlogo="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/rooted-logo-x2.7da3bc9.png" ortxt="It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."/></div>

    </div>
    <div className="owner-btn">
      <div><button className="owner-pre" onClick={previous}>
      <i class="fa-solid fa-chevron-left"></i>
 </button></div>
 <div>
      <button className="owner-next" onClick = {forward}><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>

    </div>
  </div>


</section>
<section>
  <div className="logomaker">
    <div className="logo-content">
<div className="lc-left">
<div className="logo-header">
  <p><b>fiverr</b>logomaker.</p>
</div>
<div className="logo-subheader">
  <p><b> Make an incredible logo</b> <br/>

<i> in minutes</i></p>
</div>
<div className="logo-para">
  <p>Pre-designed by top talent. Just add your touch.</p>
</div>
<div className="logo-btn">
  <Button buttontxt="Try Fiverr Logo Maker"/>
</div>
</div>
<div className="lc-right">
<img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png" alt="" />
</div>

    </div>
  </div>
</section>
<section>
 <div className="work">
  <div className="workcontent">
    <div className="work-header">
  <h1 style={{color:"#404145" , fontSize:"2rem"}} >Inspiring work made on Fiverr</h1>
    </div>
    <div className="work-ul">
  <div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c15f6b22da97be41a8878e753a1a16c2-863645391592368980.489561/AF1BF970-07CA-454B-8AF1-2F3E06838C8B" cardtitle =" Logo Design"cardpara = " by&nbsp;bruno_malagrino"/></div> 
<div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" cardtitle =" Packaging Design"cardpara = "by&nbsp;mijalzagier"/></div>  
<div className="work-list"><Card2 card2img ="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png" imgsm ="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg" cardtitle="Animated GIFs" cardpara="by lamonastudio"/>    </div>
<div className="work-list" ><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png" cardtitle =" Web & Mobile Design"cardpara = " by skydesigner "/></div>  
<div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" cardtitle ="Book Design "cardpara = " by&nbsp;annapietrangeli"/></div>  
<div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/27bdb82e27e444fe2b27aa7b3083cee8-1591694084918/f79ede47-da5f-440a-bf23-57ed9ef7d363.png" cardtitle =" Logo Design"cardpara = "by&nbsp;eveeelin "/></div>  
<div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png" cardtitle ="Social Media Design "cardpara = "by&nbsp;fernandobengua "/></div>  
<div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ad68f554913d9d326d611e604ef79b0b-1608722734146/74e5ab33-a5fc-40ae-9cee-a91b23e80237.jpg" cardtitle ="Product Photography "cardpara = " by&nbsp;passionshake"/></div>  
<div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ad68f554913d9d326d611e604ef79b0b-1608722734146/74e5ab33-a5fc-40ae-9cee-a91b23e80237.jpg" cardtitle =" Product Photography"cardpara = "by&nbsp;passionshake "/></div>  
<div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b615b780b5c813d932953d05ec10f811-1596879215580/6b4a9867-ad06-415f-b307-11177ae30fdd.jpeg" cardtitle ="Illustration "cardpara = "by&nbsp;christophbrandl "/></div>  
<div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg" cardtitle ="Flyer Design "cardpara = "by&nbsp;spickex "/></div>  
<div className="work-list"><Card2 card2img = "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png" imgsm = "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23b01eca3b78e2869e149efe15d3066a-1613424545655/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg" cardtitle ="Portraits & Caricatures "cardpara = "by&nbsp;noneyn "/></div>  

  </div>
  <div className="work-btn">
    <div><button className='work-btn-left'  onClick={workLeft} ><i class="fa-solid fa-chevron-left"></i></button></div>
    <div><button className='work-btn-right' onClick={workRight}><i class="fa-solid fa-chevron-right"></i></button></div>
  </div>
 </div>
 </div>

</section>
<section>
 <div className="work" style={{background :"white"}} >
  <div className="workcontent">
    <div className="work-header">
  <h1 style={{color:"#404145" , fontSize:"2rem"}} >Guides to help you grow</h1>
    </div>
    <div className="work-ul">
  <div className="work-list"> <Card3 card3img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png" cardtitle="A complete guide to starting a small business online" cardpara="A complete guide to starting a small business online"/> </div>
  <div className="work-list"><Card3 card3img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png" cardtitle="Digital marketing made easy" cardpara="A practical guide to understand what is digital marketing"/> </div>
  <div className="work-list"><Card3 card3img="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png" cardtitle="Create a logo for your business" cardpara="A step-by-step guide to create a memorable business logo"/> </div>

  </div>
 </div>
 </div>

</section>

<section>
  <div className="join">
    <div className="joincontent">
      <div className="join-img">
<p>Suddenly it's all so <i> doable.</i>
</p>

      </div>
      <div className="join-btn">
      <Button  buttontxt="Join Fiverr" />
      </div>
    </div>
  </div>
</section>
<section>
<div className="list">
  <div className="list-content">
    <div className="list-item">
    <div className="list-head">
      <p>Categories </p>
    </div>
    <div className="list-ul">
      <ul>
      <li> Graphics & Design</li>
<li> Digital Marketing</li>
<li> Writing & Translation</li>
<li> Video & Animation</li>
<li> Music & Audio</li>
<li> Programming & Tech</li>
<li> Data</li>
<li> Business</li>
<li> Lifestyle</li>
<li> Photography</li>
<li> End-to-End Projects</li>
<li> Sitemap</li>
      </ul>
    </div>
    </div>
    <div className="list-item">
    <div className="list-head">
      <p>About </p>
    </div>
    <div className="list-ul">
      <ul>
      <li>Careers</li>
<li>Press & News</li>
<li>Partnerships</li>
<li>Privacy Policy</li>
<li>Terms of Service</li>
<li>Intellectual Property Claims</li>
<li>Investor Relations</li>

      </ul>
    </div>
    </div>
    <div className="list-item">
    <div className="list-head">
      <p>Support </p>
    </div>
    <div className="list-ul">
      <ul>
      <li>Help & Support</li>
<li>Trust & Safety</li>
<li>Selling on Fiverr</li>
<li>Buying on Fiverr</li>
<li>Fiverr Guides</li>

      </ul>
    </div>
    </div>
    <div className="list-item">
    <div className="list-head">
      <p>Community
 </p>
    </div>
    <div className="list-ul">
      <ul>
      <li>Customer Success Stories</li>
<li>Community Hub</li>
<li>Forum</li>
<li>Events</li>
<li>Blog</li>
<li>Influencers</li>
<li>Affiliates</li>
<li>Podcast</li>
<li>Invite a Friend</li>
<li>Become a Seller</li>
<li>Community Standards</li>

      </ul>
    </div>
    </div>
    <div className="list-item">
    <div className="list-head">
      <p>More From Fiverr</p>
    </div>
    <div className="list-ul">
      <ul>
      <li>Fiverr Enterprise</li>
<li>Fiverr Business</li>
<li>Fiverr Pro</li>
<li>Fiverr Logo Maker</li>
<li>Get Inspired</li>
<li>Fiverr Select</li>
<li>ClearVoice</li>
<li>Fiverr Workspace</li>
<li>Learn</li>
<li>Working Not Working</li>
 
      </ul>
    </div>
    </div>
  </div>
</div>

</section>
<section>
  <div className="footer">
    <div className="footer-content">
   
<div className="footer-left">
<h2>fiverr <sub style={{fontSize:"1rem"}} > &reg; </sub> </h2>
<p>© Fiverr International Ltd. 2023</p>
</div>
<div className="footer-right">
  
  <ul>
   <div className="footer-item"> <li> <i class="fa-brands fa-twitter"></i></li></div>
   <div className="footer-item"> <li> <i class="fa-brands fa-facebook"></i></li></div>
   <div className="footer-item"> <li> <i class="fa-brands fa-linkedin"></i></li></div>
   <div className="footer-item"> <li> <i class="fa-brands fa-pinterest"></i></li></div>
   <div className="footer-item"> <li> <i class="fa-brands fa-instagram"></i></li></div>
   <div className="footer-item"  > <li> <i class="fa-solid fa-globe"></i> </li></div>
   <div className="footer-item"> <li> <i style={{fontStyle :"normal" , fontWeight:"bold" , fontSize:"15px"}} >PKR</i> </li></div>
   <div className="footer-item"> <li> <i class="fa-solid fa-person"></i></li></div>
  </ul>

</div>

    </div>
  </div>

</section>
    </>
  );
}
