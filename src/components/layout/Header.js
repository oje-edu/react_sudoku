import React from 'react';

/**
 * React component for the Header Section.
 */
export const Header = (props) => {
  return (
    <header className="header">
      <h1>
        ENT<span className="header__group-one">KALK</span><span className="header__group-two">ER</span>
      </h1>
      <h2 onClick={props.onClick}>
        Neu Start
      </h2>
    </header>
  )
}