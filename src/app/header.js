import React from 'react';

const Header = () => (
  <header className="ig-header">
    <div className="ig-container ig-container--fluid">
      <div className="ig-grid ig-grid-no-spacing">
        <div className="ig-grid-cell-column-2">
          <h3 className="ig-heading">iGluco</h3>
        </div>
        <div className="ig-grid-cell-column-10 text-right">
          <h4 className="ig-heading ig-heading--normal ig-user__name">
            Blood Sugars for Jamie Bradley.
          </h4>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
