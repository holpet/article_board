import "./Wrapper.css";
import Icon from "@mdi/react";
import { mdiClover } from "@mdi/js";

interface ILayoutProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: ILayoutProps) => {
  return (
    <>
      <div className="wrapper-logo-img">
        <Icon path={mdiClover} size={10} className="clover" />
      </div>
      <div className="wrapper">
        <div className="logo">
          Gre
          <div className="logo-img">
            <Icon path={mdiClover} size={6} className="clover" />
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Wrapper;
