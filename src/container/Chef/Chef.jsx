import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__wrapper app__bg section__padding" id="chef">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <p className="p__opensans">Repudiandae vitae qui veritatis illum accusantium consequuntur repellendus tenetur minima accusamus quaerat labore cum recusandae aspernatur fugiat, explicabo nesciunt! Magni, tenetur sequi!</p>
      </div>
      <div className="app__chef-sign">
        <p>Kelvin Luo</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
