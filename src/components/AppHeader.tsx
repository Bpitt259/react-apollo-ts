import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AppHeaderWrapper = styled.div`
  grid-area: header;
  grid-column: 1 / 4;
  align-self: flex-start;
  display: flex;
  align-items: center;
  height: 100%;
  box-shadow: 0px 0px 5px ${(props) => props.theme.color['grey-300']};
`;

const NavItem = styled(NavLink)`
  padding: 0 20px;
  cursor: pointer;
  text-transform: capitalize;
`;

const navItems = [{ title: 'home', route: '/' }];

function AppHeader() {
  return (
    <AppHeaderWrapper>
      {navItems.map((item) => (
        <NavItem key={item.title} to={item.route} activeClassName="selected">
          {item.title}
        </NavItem>
      ))}
    </AppHeaderWrapper>
  );
}

export default AppHeader;
