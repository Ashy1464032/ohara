import React from 'react';
import PropTypes from 'prop-types';

function BookCard(props: { name: string, author: string, plot: string}) {
    return (
        <div className='text-center border-red-800 drop-shadow-md inline-flex border-2 ml-10 mt-28 w-[25ch]'>
            <div className='p-3'>
                <h1>{props.name}</h1>
                <hr />
                <h2>by {props.author}</h2>
                <hr />
                <h3 className="underline mt-5">Synopsis:</h3>
                <p className='break-words text-wrap'>{props.plot}</p>
            </div>
        </div>
    );
}

BookCard.propTypes = {
    name: PropTypes.string,
    author: PropTypes.string,
    plot: PropTypes.string
};

export default BookCard;