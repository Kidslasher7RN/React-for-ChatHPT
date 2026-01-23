const Article = ({name, institution, personalStatement}) => {
  return (
    <div className="container">
      {ivyLeagueStudents.map((student) => {
        return (
          <>
            <div className="head">
              <p>
                {student.firstName} | {student.institution}
              </p>
            </div>
            <div className="body">
              <p>"{student.personalStatement}"</p>
            </div>
          </>
        );
      })}

      <div className="body"></div>
    </div>
  );
};

export default Article;
