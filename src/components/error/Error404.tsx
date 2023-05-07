import { useEffect } from "react";
import "./Error404.css";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="error404" onClick={() => navigate("/")}>
      <h1>404 not found :(</h1>
    </div>
  );
};

export default Error404;
