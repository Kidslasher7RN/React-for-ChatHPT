import "./Article.css";

const FakeArticle = (props) => {
  return (
    <div className="Article">
      <div className="head">
        <p>{props.title}</p>
      </div>
      <div className="body">
        <p>"{props.body}"</p>
      </div>
    </div>
  );
};

export default FakeArticle;
