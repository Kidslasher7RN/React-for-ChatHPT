const Article = ({name, institution, personalStatement}) => {
  return (
    <div className="Article">
      <div className="head">
        <p>
          {name} | {institution}
        </p>
      </div>
      <div className="body">
        <p>"{personalStatement}"</p>
      </div>
    </div>
  );
};

export default Article;
