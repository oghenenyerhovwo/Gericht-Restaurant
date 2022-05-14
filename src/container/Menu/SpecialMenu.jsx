import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="special_menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your power" />
      <h1 className="headtext__cormorant">Todays menu</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex-center">
        <p className="app__specialMenu-menu_heading">Wine & Bear</p>
        <div className="app__specialMenu-menu_items flex-center">
          {data.wines.map((wine, index) => (
            <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex-center">
        <p className="app__specialMenu-menu_heading">Cocktail</p>
        <div className="app__specialMenu-menu_items flex-center">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
