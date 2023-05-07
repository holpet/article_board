import "./Wrapper.css";
import Icon from "@mdi/react";
import { mdiClover } from "@mdi/js";

interface ILayoutProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: ILayoutProps) => {
  return (
    <>
      <div className="wrapper-heart">♥</div>
      <div className="wrapper-logo-img">
        <Icon path={mdiClover} size={10} className="clover" />
      </div>
      <div className="wrapper">
        <div className="logo">
          Stil
          <div className="logo-img">
            <Icon path={mdiClover} size={5.5} className="clover" />
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Wrapper;
