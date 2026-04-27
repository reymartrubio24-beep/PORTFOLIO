import { useState } from 'react';
import axios from 'axios';

const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (formData) => {
    setLoading(true);
    setSuccess(false);
    setError(null);
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      await axios.post(`${apiUrl}/api/contact`, formData);
      setLoading(false);
      setSuccess(true);
      return true;
    } catch (err) {
      console.error('Contact error:', err);
      setError('Failed to transmit message. Please try again later.');
      setLoading(false);
      return false;
    }
  };

  const resetStatus = () => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  return { sendMessage, loading, success, error, resetStatus };
};

export default useContact;
