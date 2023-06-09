import 'server-only';

import Link from 'next/link'
import ArtWork from './ArtWork'
import fetchArtWorks from '@/lib/fetchArtWorks'

async function ServerComponent(){

  const artWorks = await fetchArtWorks()

  return <div><div style={{
    display:'inline-block',
    margin: '21px auto', padding: '21px', 
    border: '1px dotted black'}}>
    <br /><br />
    <p>Inside this box, is a server component</p>
    <p>with a &apos;server-only&apos; directive</p>
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
    <p>We can&apos;t use styled-components here.</p>
    <br />
    <p>But, we can use it on the children</p>
    <br /><br />
    <p>Here are some data fetched from{' '}
      <Link target="_blank" href="https://api.artic.edu">
        https://api.artic.edu
      </Link></p>
    <br />
    <p>It is rendered using `ArtWork` Component, 
      <br />which is a client component using styled-components.</p>
    <br />
    <p>So the initial data fetching runs on the server.</p>
    <div style={{textAlign: 'center'}}>
      <pre style={{textAlign: 'left', display: 'inline-block'}}>{`
export default function ServerComponent() {
  return <...>
    <ArtWork {...} />
    <ArtWork {...} />
  </...>
}
    `}</pre>
    </div>
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
