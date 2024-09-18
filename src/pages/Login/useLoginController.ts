import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export function useLoginController() {
  const [username, setUsername] = useState('');
  const { login, setError, error } = useContext(UserContext);
  const navigate = useNavigate();

  function getUsername(username: string) {
    setUsername(username);
  }
  
  function handleSubmit(event: FormEvent) {
    try {
      event.preventDefault();
      setError(false);

      if (username === "") {
        setError(true);
        return;
      }

      login(username);
      navigate("/profile/home");
    } catch (err) {
      console.error(err);
    }
  }

  return {
    username,
    getUsername,
    handleSubmit,
    setUsername,
    error
  }
}