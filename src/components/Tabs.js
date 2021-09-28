import React, {useState} from "react";
import styled from "styled-components";

//A container which holds the full Tab component
const TabsContainer = styled.div`
    overflow: hidden;
    background: #fff;
    height: 100%;
    width: 100%;
    margin-top: 8px;
`;
//overflow: hidden - to show the content of the selected tab only(rest of the content will be hidden)

const TabButtonContainer = styled.div`
    display: flex;

    > * {
        flex: 1 1 0;
        max-width: 10em;
    }
`;

//Tab (Tab buttons)
const Tab = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    possition: relative;
    margin-right: 0.1em;
    font-size: 1em;
    border: ${(props) => (props.active ? "" : "1px solid #ccc")};
    border-bottom: none;
    background-color: ${(props) => (props.active ? props.theme.primary.main : "#fff")};
    height: 3em;
    color: ${(props) => (props.active ? props.theme.primary.textColor : "#000")};
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    :hover{
        background-color: ${(props) => props.theme.primary.light};
    }
`;

const TabContents = styled.div`
    border: 0.25em solid ${(props) => props.theme.primary.main};
    border-top: 0.5em solid ${(props) => props.theme.primary.main};
    border-top-right-radius: 1em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    min-height: 80vh;
`;

const Content = styled.div`
    ${(props) => (props.active ? "" : "display: none")}
`;
//display: none will not display anything if the component state is not active*
//only the content of the active tab will be displayed

//now create the main Tabs component to be used in the Dashboard 
export default function Tabs(props){
    const {tabContentsProp} = props;  //assign the prop values coming from the dashboard( array destructuring )

    const[activeTab, setActive] = useState(0); //define a state called 'active' to use react-hook

    const handleTabClick = (event) => {
        const tabIndex = parseInt(event.target.id);
        if(tabIndex !== activeTab){ //check whether the index(id) of the clicked tab is equal to the value of 'active'
            setActive(tabIndex);//if the activated content(active value) is not equal to clicked tab index, change the active value to index no.
            //then this setActive() will change the value of 'active' accordingly. then the content will be changed according to the clicked tab
        }
    };

    return(
        <TabsContainer>
            <TabButtonContainer>
                    {tabContentsProp.map((content, index)=>(
                        <Tab onClick={handleTabClick} active={activeTab === index} id={index}>
                            {content.title} 
                        </Tab>
                    ))}
            </TabButtonContainer>
            
            <TabContents>
                    {tabContentsProp.map((content, index)=>(
                        <Content active={activeTab === index}>
                            {content.elements}
                        </Content>
                    ))}
            </TabContents>
        </TabsContainer>
    );
}


