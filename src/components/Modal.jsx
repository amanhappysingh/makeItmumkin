import React, { useEffect } from 'react';

const Modal = ({ isOpen, setModal, size = 'md', children }) => { 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
       setModal(prev => !prev)
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, setModal]);
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-7xl' 
  };

  const handleBackdropClick = (e) => {
   
      setModal(prev => !prev)
    
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className={`
          bg-white rounded-lg shadow-xl w-full ${sizeClasses[size]} 
          max-h-[90vh] overflow-y-auto transform transition-all duration-200 
          animate-in fade-in zoom-in-95
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={handleBackdropClick}
            className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal