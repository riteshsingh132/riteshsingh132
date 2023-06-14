
// import Home from "./Home";
// import Lecture1 from "./jsx/Lecture1";
// import Lecture2 from "./export";
// import Profile from "./export/Profile";
import Export from "./export/Main";
import Jsx from "./jsx/Main";
// import  Comp1 from "./PropsPractice/Comp1";
import Events from "./events/Main"
// import Comp4 from "./PropsPractice/Comp4"
import Main from "../src/props/Main" 
import State from "./state/Main"
import Conditional from "./conditional/Main";
import NavMain from "./Project1/Main";
import Task2 from "./Task2/Task2";
import Task1 from "./task/Task1";
import MainCart from "./Cart/Main"
import SingleState from "./singleState/SingleState";
import Candidate from "./jsx/userFormProject/candidate";
import MainForm from"./Forms/Main"
import Routing from "./router/Main";
import Project2 from "./Project2/Main";
import ChildToParent from "./riteshPractice/Main";
import Parent from "./riteshPractice/withoutstate/Parent";
import MainApi from "./http/Main";
import ToDoMain from "./project3/ToDoMain";

function App() {

  const name="Ritesh is best Developper";

  function childExcess(abc){
    // console.log(abc)
  }

  return (
    <div>
      {/* <h1>App Components</h1>
    <Home/>
    <Lecture1/>     */}
    {/* <Lecture2/> */}
    {/* <Profile/> */}

    {/* <Export/> */}
    {/* <Jsx/>  */}
    {/* <Comp4 name1={name}/> */}
    {/* <Comp1 lname={childExcess}/> */}
    {/* <Main/> */}
    {/* <Events/> */}
    {/* <State/> */}
    {/* <Conditional/> */}
    {/* <Task1/> */}
    {/* <NavMain/> */}
    {/* <MainCart/> */}

    {/* <MainForm/> */}
    {/* <Task2/>   */}
    {/* <SingleState/> */}
    {/* <Candidate/> */}
    <Routing/>
    {/* <Project2/> */}
    {/* <ChildToParent/> */}
    {/* <Parent/> */}
    {/* <MainApi/> */}
    {/* <ToDoMain/> */}

    </div>
  );
}

export default App;
