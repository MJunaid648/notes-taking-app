import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const route = async () => {
      try {
        const user = await axios.get(
          "http://localhost:5000/user/authenticate",
          { withCredentials: true }
        );
        if (user.data.status === 1) {
          setAuth(true);
        }else{
            setAuth(false);
            navigate("/");
        }
      } catch (error) {
        setAuth(false);
        navigate("/");
      }
    };
    route();
  }, []);
  return <>{auth && <>{children}</>}</>;
}

export default PrivateRoute;
