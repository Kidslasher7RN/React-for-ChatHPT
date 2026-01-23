import "./Article.css";

const Article = (props) => {
  return (
    <div className="Article">
      <div className="head">
        <p>
          {props.firstName} | {props.institution}
        </p>
      </div>
      <div className="body">
        <p>"{props.personalStatement}"</p>
      </div>
    </div>
  );
};

export default Article;
