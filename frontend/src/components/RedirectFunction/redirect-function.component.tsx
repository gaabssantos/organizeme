import React from 'react';
import { useNavigate } from 'react-router-dom';

type RedirectFunctionProps = {
  to: string;
};

const RedirectFunction = ({ to }: RedirectFunctionProps) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  return null;
};

export default RedirectFunction;
