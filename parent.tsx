import React, { useState } from 'react';
import LoadingModal from './LoadingModal';

const YourComponent = () => {
  const [loading, setLoading] = useState(true);

  const handleClose = () => {
    setLoading(false);
  };

  return (
    <div>
      <LoadingModal isOpen={loading} onClose={handleClose} message="Processing your data..." />
      {/* Other components */}
    </div>
  );
};

export default YourComponent;
