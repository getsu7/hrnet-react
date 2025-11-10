import { useEffect } from 'react';
import './Modal.css';

const Modal = ({
  isOpen,
  onClose,
  children,
  className = '',
  closeOnEscape = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  ariaLabel = 'Fenêtre modale'
}) => {

  // Gestion de la touche Escape pour fermer la modale
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  // Désactiver le scroll du body quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      // Sauvegarder le scroll actuel
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restaurer le scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Gestion du focus pour l'accessibilité
  useEffect(() => {
    if (!isOpen) return;

    // Stocker l'élément qui avait le focus avant l'ouverture
    const previousActiveElement = document.activeElement;

    // Focus sur la modale
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
      modalContent.focus();
    }

    // Restaurer le focus à la fermeture
    return () => {
      if (previousActiveElement && previousActiveElement.focus) {
        previousActiveElement.focus();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div
        className={`modal-content ${className}`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {showCloseButton && (
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Fermer la modale"
            type="button"
          >
            ×
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;

