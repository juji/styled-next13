'use client'

import styled from 'styled-components'
import { useState } from 'react'

const Heading = styled.h1`

  color: blue;

`

const Main = styled.main`
  padding: 21px;
  text-align: center;
`

const StyledButton = styled.button<{ $bgcolor: string|null }>`
  
  margin-top: 21px;
  padding: 8px 21px;
  background-color: ${p => p.$bgcolor || 'white'};
  border: 1px solid black;
  cursor: pointer;

  &:active{
    opacity: 0.5
  }

`


export default function StyleChanged(){

  const [color, setColor] = useState<string|null>(null)
  const changeColor = () => {
    setColor('#'+Math.floor(Math.random()*16777215).toString(16))
  }

  return <Main>
    <Heading>This is Style Change</Heading>
    <p>It changes the color of the button if you click on it</p>
    <StyledButton 
      onClick={changeColor}
      $bgcolor={color}>click to change color</StyledButton>
    <div style={{textAlign: 'center'}}>
      <pre style={{textAlign: 'left', display: 'inline-block'}}>{`

const StyledButton = styled.button<{ $bgcolor: string }>\`
  
  ...
  background-color: \${p => p.$bgcolor || 'white'};
  ...

\`

export default function StyleChanged(){

  const [color, setColor] = useState<string|null>(null)
  const changeColor = () => { setColor(...) }

  return <...> 
    <StyledButton 
      onClick={changeColor}
      $bgcolor={color}>click to change color</StyledButton>
  </...>


}

    `}</pre>
    </div>
  </Main>


}