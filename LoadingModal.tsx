import React from 'react';

const LoadingModal = ({ isOpen, onClose, message = 'Computing results...' }) => {
  return (
    <Modal show={isOpen} onClose={onClose} size="xl" popup>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <Modal.Body className="flex items-center justify-center p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 transform scale-100 duration-500 ease-in-out">
          <div className="text-center m-10">
            <div className="relative flex justify-center items-center">
              <div className="absolute w-32 h-32 rounded-full border-4 border-dashed border-gradient animate-pulse-slow"></div>
              <div className="absolute w-24 h-24 rounded-full border-4 border-solid border-gradient animate-spin-slow"></div>
              <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse-fast"></div>
            </div>
            <p className="mt-12 text-2xl font-semibold text-gray-900 dark:text-white">
              <span className="debounce-animation">{message}</span><span className="text-blink">...</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">This may take a few moments</p>
            <div className="mt-6">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-blue-600 h-1.5 rounded-full animate-loading-bar"></div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default LoadingModal;
