import React from 'react';
// main default function nav
export default function Nav() {
  const linkStyle = { border: '1px blue', padding: '5px' };
// created main menu with stylings
  return (
    <nav className="main-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="/">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="/about">Contact/About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="/project">Project</a>
        </div>
      </section>
    </nav>
  );
}