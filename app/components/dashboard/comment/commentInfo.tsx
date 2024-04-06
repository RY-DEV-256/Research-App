import React from 'react';

const CommentInfo = ( ) => {
  return (
    <div>
      <label htmlFor="name">Sender:</label>
      <input type="text" disabled className="form-control mb-2" placeholder="" />
      <label htmlFor="name">Receiver:</label>
      <input type="text" disabled className="form-control mb-2" placeholder="" />
      <label htmlFor="name">Message:</label>
      <textarea disabled placeholder='' className='form-control'></textarea>
    </div>
  )
}

export default CommentInfo;


