import "./Wrapper.css";
import Icon from "@mdi/react";
import { mdiClover, mdiCardsHeart } from "@mdi/js";
import { BLOG_TITLE } from "../../lib/const/constants";

interface ILayoutProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: ILayoutProps) => {
  return (
    <>
      <div className="wrapper-heart">
        <Icon path={mdiCardsHeart} size={1.5} />
      </div>
      <div className="wrapper-logo-img">
        <Icon path={mdiClover} size={10} className="clover" />
      </div>
      <div className="wrapper">
        <div className="logo">
          {BLOG_TITLE}
          <div className="logo-img">
            <Icon path={mdiClover} size={5.5} />
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Wrapper;
