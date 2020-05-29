import * as React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const NavBar = styled.nav`
  background-color: #282828;
  height: 100%;
  overflow-x: auto;

  & > .wrapper {
    align-items: center;
    display: grid;
    grid-auto-flow: column;
    gap: 1em;
    height: 100%;
    width: fit-content;

    padding: 0em 1em;
    & > a {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      white-space: nowrap;
      height: 100%;
      padding: 0 1em;
      position: relative;

      &:hover {
        color: #bbb;
      }

      &::after {
        opacity: 0;
        background-color: rgb(107, 255, 228);
        height: 3px;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        transition: all 0.2s ease-out;
        position: absolute;
      }
    }
    & > a.selected {
      color: aliceblue;
      background-color: #666;

      &::after {
        opacity: 1;
      }
    }
  }
`;

interface NavProps {}

export const Nav: React.FC<NavProps> = () => (
  <NavBar>
    <div className="wrapper">
      <NavLink to="/1" activeClassName="selected">
        Приклад 1
      </NavLink>
      <NavLink to="/2" activeClassName="selected">
        Приклад 2
      </NavLink>
      <NavLink to="/3" activeClassName="selected">
        Приклад 3
      </NavLink>
      <NavLink to="/4" activeClassName="selected">
        Приклад 4
      </NavLink>
      <NavLink to="/5" activeClassName="selected">
        Приклад 5
      </NavLink>
      <NavLink to="/6" activeClassName="selected">
        Приклад 6
      </NavLink>
      <NavLink to="/7" activeClassName="selected">
        Приклад 7
      </NavLink>
      <NavLink to="/8" activeClassName="selected">
        Приклад 8
      </NavLink>
    </div>
  </NavBar>
);
