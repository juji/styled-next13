'use client'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  margin: 21px 0;

  img{
    max-width: 200px;
    height: auto;
  }
`


export default function ArtWork({ 
  title, thumbnail, imageId 
}:{ 
  title: string, 
  imageId: string,
  thumbnail: { 
    lqip: string, 
    width: number, 
    height: number, 
    alt_text: string 
  }
}){

  return <Container>
    <Image 
      src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
      width={thumbnail.width}
      height={thumbnail.height}
      alt={thumbnail.alt_text}
    />
    <p>{title}</p>
  </Container>

}