'use client'

import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

export const Heading = styled.h1`

  color: blue;

`

export const Main = styled.main`
  padding: 21px;
  text-align: center;
`

export const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  max-width: 300px;
  margin: auto;
  font-family: "Josefin Sans", sans-serif;
`;

export const Block = styled.div`
  background-color: white;
  color: ${({ color }) => color || "blue"};
  padding: 10px;
  border: 1px solid ${({ color }) => color || "blue"};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export const BoldBlock = styled(Block)`
  font-weight: bold;
  border: 3px solid ${({ color }) => color || "blue"};
  padding: 10px;
`;

export const PulseBlock = styled(Block)`
  animation: ${pulse} 750ms infinite alternate;
`;

export const ArrowBlock = styled(Block)`
  &::before {
    content: "◀";
    margin: 0 10px;
  }
`;

export const HoverMessage = styled.div`
  display: none;
  ${Container}:hover & {
    display: block;
  }
`;


export const StyledLink = styled(Link)`
  color: red;

  &:hover{
    color: blue;
  }
`