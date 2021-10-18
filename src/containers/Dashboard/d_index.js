//pass props to Tab component using react-hooks
//use react useState hook for that
// import React, { useState } from "react";

//useEffect() is a react hook used to run side effects(side effect is kinda response of an api call)
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

//import api calls defined by us
import { getBooks } from "../../api/bookAPI";
import { getMembers } from "../../api/memberAPI";

//import actions of Redux bookSlice state(because we have to dispatch actions)
import { setBooks } from "../../store/booksSlice";
import { setMembers } from "../../store/membersSlice";

//The tabs components will be used here
import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";
import { Books } from "./Books/Books.js";
import { Members } from "./Members/Members.js";

const Dashboard = () => {
  //why we create Dashboard as an arrow function??

  // const[active, setActive] = useState(0); //define a state called 'active' to use react-hook

  // const handleTabClick = (event) => {
  //     const tabIndex = parseInt(event.target.id);
  //     if(tabIndex !== active){ //check whether the index(id) of the clicked tab is equal to the value of 'active'
  //         setActive(tabIndex);//if the activated content(active value) is not equal to clicked tab index, change the active value to index no.
  //         //then this setActive() will change the value of 'active' accordingly. then the content will be changed according to the clicked tab
  //     }

  //give a state to this component before useEffect will run (use to show some msg to the user during an api call execution to inform that data is still loading)
  const [isLoading, setIsLoading] = useState(false);
  //we can store the response data of get api call to this 'books' state object
  //const [books, setBooks] = useState([]);
  //const [members, setMembers] = useState([]);

  //create the dispatch and the State using useDispatch(), useSelector()
  const booksFromRedux = useSelector((state) => state.books.value);
  const MembersFromRedux = useSelector((state) => state.members.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    //execute api call function
    getBooks()
      //execute if axios promise is fullfilled
      .then((response) => {
        if (!response.error) {
          dispatch(setBooks(response.data)); //dispatch the setBooks action
        }
      })
      //execute if promise has catched an error
      .catch((error) => {
        console.log(error);
      })
      //execute at the end of promise to close the sideEffect(cuz, data loading is completed at this point)
      .finally(() => {
        setIsLoading(false);
      });

    getMembers()
      //execute if axios promise is fullfilled
      .then((response) => {
        if (!response.error) {
          dispatch(setMembers(response.data));
        }
      })
      //execute if promise has catched an error
      .catch((error) => {
        console.log(error);
      })
      //execute at the end of promise to close the sideEffect(cuz, data loading is completed at this point)
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  //create a tab content component with all the content data in objects
  const tabContents = [
    { title: "Books", elements: <Books booksCatalog={booksFromRedux} /> }, //call Books component, send books data as a prop to the Books component
    { title: "Members", elements: <Members membersCatalog={MembersFromRedux} /> },
  ];

  return (
    // <Tabs contents={contents}>
    //     <Tab id={0} onClick={handleTabClick} active={active === 0}>content 1</Tab>
    //     <Tab id={1} onClick={handleTabClick} active={active === 1}>content 2</Tab>

    //     <TabContent>
    //         <Content active={active === 0}>
    //             <h2>content of tab 1 comes here</h2>
    //         </Content>
    //         <Content active={active === 1}>
    //             <h2>content of tab 2 comes here</h2>
    //         </Content>
    //     </TabContent>
    // </Tabs>

    isLoading ? <Spinner /> : <Tabs tabContentsProp={tabContents} />
  );
};

export default Dashboard;
