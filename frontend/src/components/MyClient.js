import React from 'react'
import {Link} from 'react-router-dom';
export default function MyClient() {
  return (
    <div className='myclient-section'>
        <div className="section-header">
            <h2>Some of My Happy Clients</h2>
            <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis aperiam, mollitia officiis repudiandae possimus maxime soluta labore aut dolores.</p>
        </div> 
        <div className="client-list">
            <ul>
                <li>
                    <Link to=""><img src="/images/uideck.svg" alt="" /></Link>
                </li>
                <li>
                    <Link to=""><img src="/images/tailgrids.svg" alt="" /></Link>
                </li>
                <li>
                    <Link to=""><img src="/images/lineicons.svg" alt="" /></Link>
                </li>
                <li>
                    <Link to=""><img src="/images/ayroui.svg" alt="" /></Link>
                </li>
                <li>
                    <Link to=""><img src="/images/plainadmin.svg" alt="" /></Link>
                </li>
            </ul>    
        </div>     

    </div>
  )
}
