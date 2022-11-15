import React,{useState} from 'react';
import actionList from '../Assets/actionList';
// import { useState } from 'react/cjs/react.development';


const ActionContext = React.createContext({
    defaultActionList: actionList,
    selectedActionList: [],
    updateSelectedActionList: (item) => { },
    deleteItem: (index) => { }
})


export const ActionContextProvider = (props) => {

    const [selectedActionListT, setSelectedActionList] = useState([]);
    const updateSelectedActionListFn = (item) => {
        console.log(item);
        setSelectedActionList((prevState) => prevState.concat([item]))
    }

    const deleteItemFn = (itemIndex) => {
        console.log(itemIndex);
        setSelectedActionList((prevState) => prevState.filter((item, index) => index !== itemIndex));
    }

    return (
        <ActionContext.Provider value={{
            "defaultActionList": actionList,
            selectedActionList: selectedActionListT,
            updateSelectedActionList: updateSelectedActionListFn,
            deleteItem: deleteItemFn
        }}>
            {props.children}
        </ActionContext.Provider>
    );

}

export default ActionContext;