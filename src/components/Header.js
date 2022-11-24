import React from 'react';
// main default function nav
import "../App.css"
export default function Header() {

  return (
//  header element and create github and img website and src
    <header><center>
            <a href = "https://github.com/Alanjose23" >

            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHdFtRkJFmFh9lBV-X90g8Llfu7sEL6bOxIqs56E&s" alt = "Github" style = {{height: 50}}></img>
            
            </a>
            <a href = "mailto:josealan2340@gmail.com" >
            <img src = "https://cdn-icons-png.flaticon.com/512/561/561188.png" alt = 'Email' style = {{height: 50}}></img>
            
            </a>
   </center></header>
  );
}