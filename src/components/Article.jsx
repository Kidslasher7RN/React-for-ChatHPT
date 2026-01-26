import "./Article.css";

const CumlaudeBadge = () => {
  return (
    <>
      | <i>cum laude</i>
    </>
  );
};

const Article = (props) => {
  return (
    <div className="Article">
      <div className="head">
        <p>
          {props.firstName} | {props.institution}{" "}
          {props.gpa > 3.9 && <CumlaudeBadge />}
        </p>
      </div>
      <div className="body">
        <p>"{props.personalStatement}"</p>
      </div>
    </div>
  );
};

export default Article;
