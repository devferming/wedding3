import { useEffect } from 'react';
import './styles/Header.css'

const Header = ({ id }) => {

  useEffect(() => {
    const audio = document.querySelector('#audio');
    const playAudio = () => {
      if (audio) {
        audio.play().catch((err) => console.error('Error al reproducir el audio:', err));
      }
    };

    window.addEventListener('click', playAudio);
    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, []);


  return (
    <header className='header'>
      <video className='header__bg' src="/videos/vid001.webm
      " autoPlay loop muted playsInline />
      <audio id="audio" loop autoPlay>
        <source src="/audios/aud001.webm" type="audio/webm" />
        Tu navegador no soporta audio HTML5.
      </audio>
      <div className='header__tittle'>
        <h1 className='header__tittle__h1'>Valeri Palencia</h1>
        <p className='header__tittle__p'>¡Mis 15 años!</p>
        { id && (
          <i className="header__tittle__i bx bx-chevrons-down bx-fade-down"></i>
        )}
      </div>
    </header>
  )
}
export default Header 