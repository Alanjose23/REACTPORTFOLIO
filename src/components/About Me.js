import React from 'react';


import '../App.css';

// main default function nav
export default function About() {

  return (
    // jumbotron to present myself and drop down menu to show my contact page
    <section className="about">
      <section
        style={{
          fontFamily: 'helvetica',
          backgroundColor: '#CAFFB9',
         
        }}
      >
       <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4"><center>About Me</center></h1>
    <p className="lead">Hello, my name is Alan Jose and I am excited to delve into the new field of tech, and would like to present this react app, as an oppurtunity to present myself. I am 22 years old, and love to learn. My passions aside from coding and learning are playing basketball, and hanging out with my brothers</p>
  </div>
</div>
</section>
    </section>

  );
}