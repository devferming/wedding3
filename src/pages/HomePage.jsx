import Header from '../components/HomePage/Header'
import Invitation from '../components/HomePage/Invitation'
import Ceremony from '../components/HomePage/Ceremony'
import { useParams } from 'react-router-dom'
import LockScreen from '../components/HomePage/LockScreen'

const HomePage = () => {

  const { id } = useParams();

  return (
    <>
      <LockScreen id={id} />
      <Header id={id} />
      <Invitation id={id} />
      <Ceremony />
    </>
  )
}

export default HomePage