import React from 'react'
import './brand.css';
import { google ,slack , atlassian, shopify, dropbox} from './imports'
const Brand = () => {
  return (
    <div className='brand section__padding '>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="at" />
      </div>
      <div>
        <img src={slack} alt="sla" />
      </div>
      <div>
        <img src={shopify} alt="shop" />
      </div>
      <div>
        <img src={dropbox} alt="drop" />
      </div>
    </div>
  )
}

export default Brand