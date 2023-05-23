import HomePage from '@/components/Home'
import ServerComponent from '@/components/ServerComponent'

export const metadata = {
  title: 'Home | juji',
  description: 'this is homepage',
}

export default function Home() {
  return <HomePage>
    <ServerComponent />
  </HomePage>
}
