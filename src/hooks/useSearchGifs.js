import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearchGifs = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${value}`);
  };

  return {
    value,
    onChange,
    handleSubmit,
  };
};

export default useSearchGifs;
