//pass props to Tab component using react-hooks
//use react useState hook for that
//import React, { useState } from "react";

//The tabs components will be used here
import Tabs from "../components/Tabs";

const Dashboard = () => { //why we create Dashboard as an arrow function??

    // const[active, setActive] = useState(0); //define a state called 'active' to use react-hook

    // const handleTabClick = (event) => {
    //     const tabIndex = parseInt(event.target.id);
    //     if(tabIndex !== active){ //check whether the index(id) of the clicked tab is equal to the value of 'active'
    //         setActive(tabIndex);//if the activated content(active value) is not equal to clicked tab index, change the active value to index no.
    //         //then this setActive() will change the value of 'active' accordingly. then the content will be changed according to the clicked tab
    //     }

    //create a tab content component with all the content data in objects
    const tabContents = [
        {title: "Books", elements: <h1>Contents of books go here</h1>},
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
        <Tabs tabContentsProp={tabContents} />
    );
};

export default Dashboard;