import React from 'react'
import './threecard.css'

export default function Threecard({title  , liItem1 , liItem2, liItem3 , subCode , iconSource }) {
  return (
  <div class="parent">
        <div class="card">
            <div class="logo">
                {/* <span class="circle circle1"></span>
                <span class="circle circle2"></span>
                <span class="circle circle3"></span>
                <span class="circle circle4"></span> */}
                <span className ={`circle circle5 ${subCode}`}>
                      <img src={iconSource}  style = {{height : '80px' , padding : '4px'}}alt="" loading='lazy'/>
                </span>

            </div>
            <div class="glass"></div>
            <div class="content">
                <div className="three-card-icon-header">
                  <div className={`three-card-icon ${subCode}`}></div>
                    <div className="title1">{title}</div>
                </div>
                
                <ul className='sub-skill-list'>
                    <li>{liItem1}</li>
                    <li>{liItem2}</li>
                    <li>{liItem3}</li>
                </ul>
            </div>
            <div class="bottom">
                
               
                {/* <div class="view-more">
                    <button class="view-more-button">View more</button>
                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                </div> */}
            </div>
        </div>
    </div>
  )
}
