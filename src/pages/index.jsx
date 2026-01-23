import dummyDb from "../db.json";

const Homepage = () => {
  return (
    <>
      <h1>Ivy's Words</h1>

      <div className="Article-Container">
        {dummyDb.map((student) => {
          return (
            <Article
              name={student.firstName}
              institution={student.institution}
              personalStatement={student.personalStatement}
            />
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
