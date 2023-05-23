import 'server-only';
import Image from 'next/image'
import styles from './serverComponent.module.scss'

async function fetchArtWorks(){
  const resp = await fetch('https://api.artic.edu/api/v1/artworks?limit=5&fields=id,title,image_id,thumbnail')
  return await resp.json()
}

function ArtWork({ 
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

  return <div className={styles.artwork}>
    <Image 
      src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
      width={thumbnail.width}
      height={thumbnail.height}
      alt={thumbnail.alt_text}
    />
    <p>{title}</p>
  </div>

}

async function ServerComponent(){

  const artWorks = await fetchArtWorks()

  return <div><div style={{
    display:'inline-block',
    margin: '21px auto', padding: '21px', 
    border: '1px dotted black'}}>
    <br /><br />
    <p>This is a server component</p>
    <p>with a 'server-only' directive</p>
    <br />
    <div style={{textAlign: 'center'}}>
      <pre style={{textAlign: 'left', display: 'inline-block'}}>{`
export default function Home() {
  return <HomePage>
    <ServerComponent />
  </HomePage>
}
    `}</pre>
    </div>
    <br />
    <p>It is mounted as a children of a client component.</p>
    <p>We can't use styled-components here</p>
    <br /><br />
    <p>Here are some data fetched from <code>https://api.artic.edu</code>:</p>
    <div>
      {artWorks.data.map((art:any) => {

        return <ArtWork key={art.id} 
        imageId={art.image_id}
          title={art.title} 
          thumbnail={art.thumbnail} />

      })}
    </div>
  </div>
  </div>

}

export default ServerComponent as unknown as () => JSX.Element;
