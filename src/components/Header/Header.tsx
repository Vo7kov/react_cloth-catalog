/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { getScreenType } from '../../helpers/getScreenType';
import { makeUrl } from '../../helpers/makeUrl';
import {
  HEADER_LEFT_NAV_LINKS,
  HEADER_RIGHT_NAV_LINKS,
} from '../../helpers/NavLinks';

import { Resolutions } from '../../types/Resolutions';
import { NavLink as HeaderLink } from '../../types/NavLink';

import './Header.scss';

export const Header: React.FC = React.memo(() => {
  const [screenType, setScreenType] = useState(getScreenType());
  const [isMenuOpened] = useState(false);

  const handleResize = () => setScreenType(getScreenType());

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className="header"
    >
      <div className="container">
        <nav className="header__nav">
          <ul className="header__nav-list">
            {screenType !== Resolutions.Desktop && (
              <li className="header__nav-list-item">
                <button
                  className="header__nav-list-button"
                  type="button"
                >
                  <svg
                    className="icon icon--burger"
                    width="39"
                    height="29"
                    viewBox="0 0 39 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      y1="1.5"
                      x2="39"
                      y2="1.5"
                      stroke="black"
                      strokeWidth="3"
                    />

                    <line
                      y1="14.5"
                      x2="39"
                      y2="14.5"
                      stroke="black"
                      strokeWidth="3"
                    />

                    <line
                      y1="27.5"
                      x2="39"
                      y2="27.5"
                      stroke="black"
                      strokeWidth="3"
                    />
                  </svg>
                </button>
              </li>
            )}

            {screenType === Resolutions.Desktop
              && HEADER_LEFT_NAV_LINKS.map(link => (
                <li
                  className="header__nav-list-item"
                  key={link}
                >
                  <NavLink
                    className="header__nav-list-link"
                    to={makeUrl(link)}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}

            <li className="header__nav-list-item">
              <NavLink
                className="header__nav-list-link"
                to="/"
              >
                <svg
                  className="icon icon--logo"
                  width="185"
                  height="143"
                  viewBox="0 0 185 143"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0388 69C16.2388 69 5.37215 69.6667 0.0388188 70C-0.761181 70.8 11.0388 71.3333 17.0388 71.5C37.8388 105.1 72.7055 112.167 87.5388 111.5C90.2408 112.272 91.608 131.109 92 141.413V142.5C92.0061 142.316 92.0126 142.129 92.0194 141.939C92.0262 142.129 92.0327 142.316 92.0388 142.5V141.413C92.4308 131.109 93.798 112.272 96.5 111.5C111.333 112.167 146.2 105.1 167 71.5C173 71.3333 184.8 70.8 184 70C178.667 69.6667 167.8 69 167 69C166.881 69 166.584 68.496 166.058 67.6012C162.165 60.9871 145.708 33.0234 95.5 29.5C94.8405 20.267 93.235 1.6066 92.0388 0.0448161V0C92.0324 0.00646281 92.0259 0.0134409 92.0194 0.0209301C92.0129 0.0134409 92.0064 0.00646281 92 0V0.0448158C90.8038 1.60659 89.1983 20.267 88.5388 29.5C38.3308 33.0234 21.8737 60.9871 17.9812 67.6012C17.4546 68.496 17.158 69 17.0388 69ZM28.5387 68.5C31.2054 63.3333 41.3387 51.1 60.5387 43.5C57.2054 46.6667 50.4387 55.6 50.0387 66C47.5387 66.5 39.7387 67.7 28.5387 68.5ZM57.0387 64.5C65.8 63 83.9659 55.5 86.5387 37.5C78.372 37.8333 61.0387 43.7 57.0387 64.5ZM28.5387 72.5C33.872 72.6667 45.6387 73.3 50.0387 74.5C50.7054 79.5 53.5387 91 59.5387 97C52.2054 94.1667 35.7387 85.3 28.5387 72.5ZM56.5387 76C65.0386 76.8333 83.0386 83.4 87.0387 103C78.7123 103.333 60.9555 98.4 56.5387 76ZM155.5 68.5C152.833 63.3333 142.7 51.1 123.5 43.5C126.833 46.6667 133.6 55.6 134 66C136.5 66.5 144.3 67.7 155.5 68.5ZM127 64.5C118.239 63 100.073 55.5 97.5001 37.5C105.667 37.8333 123 43.7 127 64.5ZM155.5 72.5C150.167 72.6667 138.4 73.3 134 74.5C133.333 79.5 130.5 91 124.5 97C131.833 94.1667 148.3 85.3 155.5 72.5ZM127.5 76C119 76.8333 101 83.4 97.0001 103C105.326 103.333 123.083 98.4 127.5 76Z"
                  />
                </svg>

              </NavLink>
            </li>

            {screenType === Resolutions.Desktop
              && HEADER_RIGHT_NAV_LINKS.map(link => (
                <li
                  className="header__nav-list-item"
                  key={link}
                >
                  <NavLink
                    className="header__nav-list-link"
                    to={makeUrl(link)}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}

            {screenType !== Resolutions.Desktop && !isMenuOpened && (
              <li className="header__nav-list-item">
                <NavLink
                  className="header__nav-list-link"
                  to={makeUrl(HeaderLink.Bag)}
                >
                  {HeaderLink.Bag}
                </NavLink>
              </li>
            )}

            {screenType !== Resolutions.Desktop && isMenuOpened && (
              <li className="header__nav-list-link">
                <button
                  type="button"
                >
                  Close
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
});
