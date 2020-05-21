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

      &:hover {
        color: #bbb;
      }
    }
    & > a.selected {
      color: aliceblue;
      background-color: #666;
    }
  }
`;

interface NavProps {}

export const Nav: React.FC<NavProps> = () => (
  <NavBar>
    <div className="wrapper">
      <NavLink to="/1" activeClassName="selected">
        Пример 1
      </NavLink>
      <NavLink to="/2" activeClassName="selected">
        Пример 2
      </NavLink>
      <NavLink to="/3" activeClassName="selected">
        Пример 3
      </NavLink>
      <NavLink to="/4" activeClassName="selected">
        Пример 4
      </NavLink>
      <NavLink to="/5" activeClassName="selected">
        Пример 5
      </NavLink>
      <NavLink to="/6" activeClassName="selected">
        Пример 6
      </NavLink>
      <NavLink to="/7" activeClassName="selected">
        Пример 7
      </NavLink>
      <NavLink to="/8" activeClassName="selected">
        Пример 8
      </NavLink>
      <NavLink to="/9" activeClassName="selected">
        Пример 9
      </NavLink>
      <NavLink to="/10" activeClassName="selected">
        Пример 10
      </NavLink>
    </div>
  </NavBar>
);
