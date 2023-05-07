import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IErrorProps {
  type: string;
}

const Error = ({ type }: IErrorProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div onClick={() => navigate("/")}>
      {type === "404" && <h1>404 not found :(</h1>}
      {type === "fetch" && (
        <>
          <h1>Sorry!</h1>
          <h3>An error occured. Please, try again later.</h3>
        </>
      )}
    </div>
  );
};

export default Error;
