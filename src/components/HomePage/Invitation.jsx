import './styles/Invitation.css'
import { guests } from '../../data';

const Invitation = ({ id }) => {

  const quotas = [
    ['contigo', 'invitarte', 'Tu presencia', 'deseas'],
    ['con ustedes', 'invitarlos', 'La presencia de ustedes', 'desean'],
  ];

  // Seleccionar el contenido apropiado basado en el número de cupos
  const quotaIndex = guests[id][3]
  const [invitationPart1, invitationPart2, invitationPart3, invitationPart4] = quotas[quotaIndex];

  return (
    <section className='invitation' id='invitation'>
      {
        id && (
          <article className='invitation__article'>
            <p className='invitation__article__p'>
              {guests[id][1]} <br />
              <span className='invitation__article__p--guest'>
                {guests[id][0]} <small>{`(${guests[id][2]} ${guests[id][2] === 1 ? 'cupo' : 'cupos'})`}</small>,
              </span>
            </p>
            <p className='invitation__article__p'>
              En este momento tan especial, lleno de sueños y emociones, quiero compartir {invitationPart1} una celebración que significa mucho para mí.
            </p>
            <p className='invitation__article__p'>
              Con toda la alegría de mi corazón, tengo el honor de {invitationPart2} a mis quince años. Será un día inolvidable, lleno de magia y momentos que atesoraré por siempre.
            </p>
            <p className='invitation__article__p'>
              La cita es este <strong>15 de diciembre de 2024</strong>, en el <strong>Club Social El Refugio</strong>, donde juntos celebraremos este nuevo capítulo en mi vida.
            </p>
            <p className='invitation__article__p'>
              {invitationPart3} será el mayor regalo en este día tan especial. Si {invitationPart4} acompañarlo con un gesto adicional, habrá un espacio destinado para sobres.
            </p>
            <p className='invitation__article__p'>
              Con todo mi cariño,
            </p>
            <p className='invitation__article__signature'>Valeri Palencia</p>
          </article>
        ) 
      }
    </section>
  )
}

export default Invitation
