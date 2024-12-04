import './styles/Ceremony.css'
import { Map, Marker } from "pigeon-maps"

const Ceremony = () => {
  const color = `#DD4336`

  return (
    <section className='ceremony' id='ceremony'>
      <article className='ceremony__article'>

        <div className='ceremony__article__map'>
          <Map
            height={300}
            width={300}
            defaultCenter={[10.869856400939936, -74.7727321378303]}
            defaultZoom={17}
          >
            <Marker
              width={40}
              anchor={[10.869856400939936, -74.7727321378303]}
              color={color}
            />
          </Map>
        </div>


        <div className='ceremony__article__address'>

          <span className='ceremony__article__address__tittle'>
            <i className='ceremony__article__address__tittle__i bx bxs-party'></i>
            <h2 className='ceremony__article__address__tittle__h2'>Celebración</h2>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-calendar'></i>
            <p className='ceremony__article__address__span__p'>15 de diciembre 2024</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-map'></i>
            <p className='ceremony__article__address__span__p'>Cra 27 #11c-82, El Concord</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-building'></i>
            <p className='ceremony__article__address__span__p'>Club Social El Refugio</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-time'></i>
            <p className='ceremony__article__address__span__p'>Hora: 08:00 PM.</p>
          </span>
          
        </div>
      </article>
    </section>
  )
}

export default Ceremony