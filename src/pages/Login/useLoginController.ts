import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../@hooks/useUser";

export function useLoginController() {
  const [username, setUsername] = useState('');
  const { setError, error, setUsername: setUsernameContext, login } = useUser();
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

      setUsernameContext(username);
      login();
      navigate("/home");
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