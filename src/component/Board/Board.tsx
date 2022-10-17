import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useHooks from '../hooks/useHooks';

const Board = () => {
    const { boards } = useHooks()
    const { id } = useParams()
    return (
        <div className='app'>
            {boards.map((board: any) =>
                board.id === id && <div key={board.id} className='board'>
                    <div className='board__title'>{board.title}</div>
                    <Link to='/'><button className='btn'>Назад</button></Link>
                    {board.tasks.map((item: any) =>
                        <div
                            key={item.id}
                            className='item'>{item.title}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Board;