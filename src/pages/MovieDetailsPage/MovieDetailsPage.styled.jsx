import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;

  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: 2px solid black;
  background-color: #00000024;

  :hover {
    background-color: orangered;
    color: white;
    border: 2px solid transparent;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`;
