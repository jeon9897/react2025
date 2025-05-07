import React from 'react';

function Header(props) {
  return (
    <>
      <header className="k_header">
        <h1>
        <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
        </h1>
      </header>
    </>
  );
}

export default Header;