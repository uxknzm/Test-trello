import React from 'react';
import data from '../../Data'


const useHooks = () => {
    window.addEventListener('storage', storageEventHandler, true);

    function storageEventHandler(e: any) {
        localStorage.setItem(e.key, e.newValue)
        const data2 = localStorage.getItem(e.key)
        //@ts-ignore
        setBoards(JSON.parse(data2))
    }
    const data1 = localStorage.getItem('boards')

    const [boards, setBoards] = React.useState(
        //@ts-ignore
        JSON.parse(data1) || data)
    const [currentBoard, setCurrentBoard] = React.useState(null)
    const [currentItem, setCurrentItem] = React.useState(null)
    localStorage.setItem('boards', JSON.stringify(boards))
    return ({ boards, currentBoard, currentItem, setBoards, setCurrentBoard, setCurrentItem });
};

export default useHooks;