import React from 'react';
import { NavLink } from 'react-router-dom';
import useHooks from './hooks/useHooks';
import InputContainer from './Input/InputContainer';
import { v4 as uuid } from 'uuid';

const Home = () => {
    const { boards, currentBoard, currentItem, setBoards, setCurrentBoard, setCurrentItem } = useHooks()
    if (boards.length >= 5) {
        boards.length = 5;
    }
    const [text, setText] = React.useState('')
    const dragOverHandler = (e: any) => {
        e.preventDefault()
        if (e.target.className === 'item') {
            e.target.style.boxShadow = '0 4px 3px gray'
        }
    }
    const dragLeaveHandler = (e: any) => {
        e.target.style.boxShadow = 'none'
    }
    const dragStartHandler = (board: any, item: any) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }
    const dragEndHandler = (e: any) => {
        e.target.style.boxShadow = 'none'
    }
    const dropHandler = (e: any, board: any, item: any) => {
        e.preventDefault()
        e.target.style.boxShadow = 'none'
        //@ts-ignore
        const currentIndex = currentBoard.tasks.indexOf(currentItem)
        //@ts-ignore
        currentBoard.tasks.splice(currentIndex, 1)
        const dropIndex = board.tasks.indexOf(item)
        //@ts-ignore
        board.tasks.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map((b: any) => {
            if (b.id === board.id) {
                return board
            }
            //@ts-ignore
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }
    const updateListTitle = (text: string) => {
        if (text) {
            const newListId = uuid();
            const newList = {
                id: newListId,
                title: text,
                tasks: [],
            };
            const newState = [
                ...boards,
                newList
            ]
            setBoards(newState);
            setText('')
        }
    }
    const updateCardTitle = (textCard: string, index: number) => {
        if (textCard) {
            const newCardId = uuid();
            const newCard =
            {
                id: newCardId,
                title: textCard,
            };
            const list = boards[index];
            list.tasks = [...list.tasks, newCard];
            const newStateCard = [
                ...boards,
            ]
            setBoards(newStateCard)
        }
    };
    const deleteList = (id: string) => {
        setBoards(boards.filter((b: any) => b.id !== id))
    }
    const deleteCard = (index: number, id: string) => {
        const list = boards[index]
        list.tasks = list.tasks.filter((item: any) => item.id !== id)
        const newDelete = [
            ...boards,
        ]
        setBoards(newDelete)
        // const fasfsa = boards[index].tasks.filter((item: any) => item.id !== id)
        // console.log(fasfsa)
        // setBoards(boards[index].tasks.filter((item: any) => item.id !== id))
    }

    return (
        <div className='app'>
            {boards.map((board: any, index: number) =>
                <div key={board.id} className='board'>
                    <NavLink to={`/board/${board.id}`} className='board__title'>{board.title}</NavLink>
                    <button className='delete_btn' onClick={() => deleteList(board.id)}>Удалить доску</button>
                    {board.tasks.map((item: any) =>
                        <div
                            key={item.id}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={() => dragStartHandler(board, item)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e, board, item)}
                            draggable={true}
                            className='item'>{item.title} <img onClick={() => deleteCard(index, item.id)} src='https://cdn-icons-png.flaticon.com/512/3687/3687412.png' width='25px' alt={item.title} />
                        </div>
                    )}
                    <InputContainer updateCardTitle={updateCardTitle} index={index} />
                </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                <input className='text-field__input' type="text" placeholder="Введите название доски..." value={text} onChange={e => setText(e.target.value)} />
                <button className='btn' onClick={() => updateListTitle(text)}>+ Добавить новую доску...</button>
            </div>
        </div>
    );
};

export default Home;