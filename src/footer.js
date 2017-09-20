import React, { Component } from 'react';

class Footer extends React.Component{
  render(){
    return(
      <footer className='navbar-fixed-bottom nav navbar-default'>
        ©2017 DintaMel - All rights reserved.
        <div>
          <a href="https://responsivevoice.org">ResponsiveVoice-NonCommercial </a>
           licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
          <img title="ResponsiveVoice Text To Speech" src="https://responsivevoice.org/wp-content/uploads/2014/08/95x15.png" alt="95x15" width="95" height="15" />
          </a>
         </div>

      </footer>

    );
  }
}

export{Footer};
