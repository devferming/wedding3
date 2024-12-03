import './styles/LockScreen.css';
import { guests } from '../../data';
import { useState, useEffect } from 'react';

const LockScreen = ({ id }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  // Bloquear el scroll al montar el componente y restaurarlo al desmontarlo
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';  // Bloquea el scroll
    } else {
      document.body.style.overflow = '';  // Restaura el scroll
    }

    // Cleanup: Restaurar el scroll si el componente se desmonta
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const handleClose = () => {
    // Inicia la animación de salida
    setIsHidden(true);

    // Espera que termine la animación y luego oculta el componente
    setTimeout(() => {
      setIsVisible(false); // Después de la animación, se oculta el componente
    }, 1000); // Tiempo que debe coincidir con la duración de la animación
  };

  return (
    isVisible && (
      <div className={`home__screenLock ${isHidden ? 'home__screenLock--hidden' : ''}`}>
        {id && guests[id] ? (
          <>
            <p className='home__screenLock__p'>Invitación para:</p>
            <p className='home__screenLock__p2'>{guests[id][0]}</p>
            <button className='home__screenLock__btn' onClick={handleClose}>
              <span className='home__screenLock__btn--span'>Abrir</span>
            </button>
          </>
        ) : (
          <p>No se encontró una invitación válida.</p>
        )}
      </div>
    )
  );
};

export default LockScreen;
