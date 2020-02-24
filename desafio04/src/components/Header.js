import React, {Component} from 'react'

import profile from '../assets/profile.png'

class Header extends Component{
  render(){
    return (
      <header>
        <nav>
          <img id='imgpage'src="https://i.imgur.com/KDIDiSE.png"/>
          <div>
            <h1>Meu perfil</h1>
            <img id="profile" src={profile}/>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header