import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  list-style: none;

  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const MovieItem = styled.li`
  display: flex;
  width: 240px;

  background-color: #00000039;

  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.76);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
`;

export const TextWrap = styled.div`
  padding: 10px;
  text-align: center;
`;
