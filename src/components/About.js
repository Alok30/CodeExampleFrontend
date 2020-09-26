import React from 'react';
import {Link} from 'react-router-dom'
export default function About( props ) {
    return (
        <div className="jumbotron">
          <div>
          <button class="float-right"><Link to='/login'>Login </Link></button>
          <h1>Article</h1> 
         </div>
            <p>
                Welcome to NY Times. All the Information you want::
            </p>
            
        </div>
    )
}