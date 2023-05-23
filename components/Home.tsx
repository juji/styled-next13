'use client'
import styled, { keyframes } from 'styled-components'

const Heading = styled.h1`

  color: blue;

`

const Main = styled.main`
  padding: 21px;
`

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 300px;
  margin: auto;
  font-family: "Josefin Sans", sans-serif;
`;

const Block = styled.div`
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

const BoldBlock = styled(Block)`
  font-weight: bold;
  border: 3px solid ${({ color }) => color || "blue"};
  padding: 10px;
`;

const PulseBlock = styled(Block)`
  animation: ${pulse} 750ms infinite alternate;
`;

const ArrowBlock = styled(Block)`
  &::before {
    content: "◀";
    margin: 0 10px;
  }
`;

const HoverMessage = styled.div`
  display: none;
  ${Container}:hover & {
    display: block;
  }
`;



export default function Home() {
  return (
    <Main>
      <Heading>This is heading</Heading>
      <Container>
        <h2> Styled Components </h2>
        <HoverMessage> Inside Container </HoverMessage>
        <Block>Ex A</Block>
        <Block color="green">Ex B</Block>
        <BoldBlock color="black">Ex C</BoldBlock>
        <PulseBlock color="purple">Ex C</PulseBlock>
        <ArrowBlock> Ex D </ArrowBlock>
      </Container>
    </Main>
  )
}