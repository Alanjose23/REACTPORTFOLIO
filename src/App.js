import React from "react";
// import About from "./components/About Me";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import Project from "./components/Project"
import Main from "./components/Mainpage";
export default function App() {

  // attempt at changing pages due to the state variable and use state
  // did not work
//   const [page, changepage] = useState(0);
//   changepage = (p1) => {
//     if(p1 == 1){
//       page = 1;
//       return <Project/>
//     }
//     else if(p1 == 2){
//       page = 2;
//       return <About/>
//   }
// }


  return (
  
  <div>
  <Header/>
  <Nav/>
  <Main/>
  <Project/>
  </div>
  );
}

