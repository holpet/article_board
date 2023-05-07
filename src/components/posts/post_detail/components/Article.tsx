import "./Article.css";
import Icon from "@mdi/react";
import { mdiClover, mdiCardsHeart } from "@mdi/js";

interface IArtipleProps {
  title: string;
  name: string;
  username: string;
  text: string;
}

const Article = ({ title, name, username, text }: IArtipleProps) => {
  return (
    <section className="detail content">
      <div className="heart">
        <Icon path={mdiCardsHeart} size={5} />
      </div>
      <article>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <h3>
          <span>
            <Icon path={mdiClover} size={1} className="clover" />
            &nbsp;{name}&nbsp;
          </span>
          <span>
            @<i>{username}</i>
          </span>
        </h3>
        <p>{text}</p>
      </article>
    </section>
  );
};

export default Article;
