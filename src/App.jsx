import {useState} from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Article from "./components/Article";

const ivyLeagueStudents = [
  {
    id: "HVD-882941",
    firstName: "Elena",
    lastName: "Rodriguez",
    institution: "Harvard University",
    year: "Junior",
    major: "Social Studies & Philosophy",
    gpa: 3.94,
    personalStatement:
      "Navigating the intersection of political theory and grassroots activism; usually found in Widener Library with way too much espresso.",
    honors: ["Dean's List", "John Harvard Scholar"],
    extracurriculars: {
      primary: "Harvard Crimson Editor",
      secondary: "Model UN Chair",
    },
    internships: [
      {company: "Council on Foreign Relations", role: "Research Intern"},
    ],
  },
  {
    id: "BRN-003291",
    firstName: "Julian",
    lastName: "Chen",
    institution: "Brown University",
    year: "Senior",
    major: "Applied Mathematics-Economics",
    gpa: 4.0,
    personalStatement:
      "The Open Curriculum allowed me to bridge stochastic modeling with urban sociology. I believe data is only as good as the stories it tells.",
    honors: ["Phi Beta Kappa", "Open Curriculum Fellow"],
    extracurriculars: {
      primary: "Brown Venture Group (President)",
      secondary: "Club Soccer",
    },
    internships: [
      {company: "Goldman Sachs", role: "Investment Banking Analyst"},
    ],
  },
  {
    id: "UPN-449102",
    firstName: "Amara",
    lastName: "Okonjo",
    institution: "University of Pennsylvania",
    year: "Sophomore",
    major: "Wharton: Finance & Business Analytics",
    gpa: 3.82,
    personalStatement:
      "Looking to leverage fintech to solve liquidity issues in emerging markets. Currently balancing 18 credits and three board positions.",
    honors: ["Joseph Wharton Scholar"],
    extracurriculars: {
      primary: "Wharton Undergraduate Fintech Group",
      secondary: "West Philadelphia Tutoring Project",
    },
    internships: [{company: "McKinsey & Co.", role: "Summer Business Analyst"}],
  },
  {
    id: "YAL-112049",
    firstName: "Liam",
    lastName: "Sterling",
    institution: "Yale University",
    year: "Freshman",
    major: "Ethics, Politics, and Economics (EP&E)",
    gpa: 3.89,
    personalStatement:
      "Just a resident of Branford College trying to figure out if I want to run for office or go into constitutional law. Or both.",
    honors: ["National Merit Scholar"],
    extracurriculars: {
      primary: "Yale Political Union",
      secondary: "Varsity Fencing",
    },
    internships: [],
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <Article
          name={ivyLeagueStudents.firstName}
          institution={ivyLeagueStudents.institution}
          personalStatement={ivyLeagueStudents.personalStatement}
        />
      </div>
    </>
  );
}

export default App;
