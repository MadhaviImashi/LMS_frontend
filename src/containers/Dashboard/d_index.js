//pass props to Tab component using react-hooks
//use react useState hook for that
// import React, { useState } from "react";

//useEffect() is a react hook used to run side effects(side effect is kinda response of an api call)
import React, { useEffect , useState} from "react";

//import api calls defined by us
import { getBooks } from "../../api/bookAPI";

//The tabs components will be used here
import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";
import { Books } from "./Books";

const Dashboard = () => { //why we create Dashboard as an arrow function??

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
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        //execute api call function
        getBooks()
            //execute if axios promise is fullfilled
            .then((response)=>{
                if(!response.error){
                    console.log(response.data);
                    setBooks(response.data);
                }
            })
            //execute if promise has catched an error
            .catch((error)=>{
                console.log(error);
            })
            //execute at the end of promise to close the sideEffect(cuz, data loading is completed at this point)
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    //create a tab content component with all the content data in objects
    const tabContents = [
        {title: "Books", elements: <Books booksCatalog ={books}/>}, //call Books component, send books data as a prop to the Books component
        {title: "Members", elements: <h1>Contents of members go here</h1>},
    ]
    
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