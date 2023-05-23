
import {
  Heading,
  Main,
  Container,
  Block,
  BoldBlock,
  PulseBlock,
  ArrowBlock,
  HoverMessage,
  StyledLink,
} from './styles'

import fetchArtWorks from '@/lib/fetchArtWorks'
import ArtWork from '../ServerComponent/ArtWork'
import Link from 'next/link'

const preText = `
+ Separate
  - index.tsx
  - styles.tsx #'use client'
`

async function Separate(){
  
  const artWorks = await fetchArtWorks()

  return (
    <Main>
      <Heading>This is Separate</Heading>
      <br />
      <p>It separates the styles and the page into two files</p>
      <p>And marked the styles file as &apos;use client&apos;</p>
      <br />
      <div style={{textAlign: 'center'}}>
        <pre style={{textAlign: 'left', display: 'inline-block'}}>{preText}</pre>
      </div>
      <br />
      <Container>
        <h2> Styled </h2>
        <HoverMessage> Inside Container </HoverMessage>
        <Block>Ex A</Block>
        <Block color="green">Ex B</Block>
        <BoldBlock color="black">Ex C</BoldBlock>
        <PulseBlock color="purple">Ex C</PulseBlock>
        <ArrowBlock> Ex D </ArrowBlock>
        <br /><br />
      </Container>
      <br />
      <p>Check out the repo:</p>
        <StyledLink 
          href="https://github.com/juji/styled-next13"
          target="_blank">https://github.com/juji/styled-next13</StyledLink>
      
      <br /><br />
      <p>Here are some data fetched on the server:</p>
      <div>
        {artWorks.data.map((art:any) => {

        return <ArtWork key={art.id} 
          imageId={art.image_id}
          title={art.title} 
          thumbnail={art.thumbnail} />

        })}
      </div>
      <br />
      <p>Data origin: <Link target="_blank" href="https://api.artic.edu">
        https://api.artic.edu
      </Link></p>
      <br />
    </Main>
  )
}

export default Separate as unknown as () => JSX.Element;