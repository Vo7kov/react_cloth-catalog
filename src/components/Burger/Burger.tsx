import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BURGER_UP_NAV_LINKS } from '../../helpers/NavLinks';
import { makeUrl } from '../../helpers/makeUrl';
import { resetSearchParams } from '../../helpers/resetSearchParams';

import { Resolutions } from '../../types/Resolutions';
import { NavLink as BurgerLink } from '../../types/NavLink';

import { Header } from '../Header/Header';

import './Burger.scss';

type Props = {
  classNames: string,
  isMenuOpened: boolean,
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>,
  screenType: Resolutions,
  setScreenType: React.Dispatch<React.SetStateAction<Resolutions>>,
  setIsSearchOpened: React.Dispatch<React.SetStateAction<boolean>>,
  setIsWishlistOpened: React.Dispatch<React.SetStateAction<boolean>>,
};

export const Burger: React.FC<Props> = React.memo(({
  classNames,
  isMenuOpened,
  setIsMenuOpened,
  screenType,
  setScreenType,
  setIsSearchOpened,
  setIsWishlistOpened,
}) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const handleSearchClick = () => {
    setIsSearchOpened(prev => !prev);
    setIsMenuOpened(false);
  };

  return (
    <div className={classNames}>
      <Header
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
        screenType={screenType}
        setScreenType={setScreenType}
      />

      <div className="container">
        <nav className="burger__nav">
          <ul className="burger__nav-list">
            <li className="burger__nav-list-item">
              <NavLink
                className="burger__nav-list-link"
                to={{
                  pathname: `${makeUrl(BurgerLink.AllGender)}`,
                  search: `${resetSearchParams(searchParams)}?year=2022`,
                }}
                onClick={() => setIsMenuOpened(false)}
              >
                {t(BurgerLink.NewArrivals)}
              </NavLink>
            </li>

            {BURGER_UP_NAV_LINKS.map(link => (
              <li
                className="burger__nav-list-item"
                key={link}
              >
                <NavLink
                  className="burger__nav-list-link"
                  to={{
                    pathname: makeUrl(link),
                    search: resetSearchParams(searchParams),
                  }}
                  onClick={() => setIsMenuOpened(false)}
                >
                  {t(link)}
                </NavLink>
              </li>
            ))}

            <li className="burger__nav-list-item">
              <button
                className="burger__nav-list-button"
                type="button"
                onClick={handleSearchClick}
              >
                {t(BurgerLink.Search)}
              </button>
            </li>

            <li className="burger__nav-list-item">
              <NavLink
                className="burger__nav-list-link"
                to={{
                  pathname: makeUrl(BurgerLink.Delivering),
                  search: resetSearchParams(searchParams),
                }}
                onClick={() => setIsMenuOpened(false)}
              >
                {t(BurgerLink.Delivering)}
              </NavLink>
            </li>

            <li className="burger__nav-list-item">
              <button
                className="burger__nav-list-link"
                type="button"
                onClick={() => {
                  setIsWishlistOpened(true);
                  setIsMenuOpened(false);
                }}
              >
                {t(BurgerLink.WishList)}
              </button>
            </li>

            <li className="burger__nav-list-item">
              <NavLink
                className="burger__nav-list-link"
                to={{
                  pathname: makeUrl(BurgerLink.Profile),
                  search: resetSearchParams(searchParams),
                }}
                onClick={() => setIsMenuOpened(false)}
              >
                {t(BurgerLink.Profile)}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
});
