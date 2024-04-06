import React from 'react';

const ModuleInfo = ( ) => {
  return (
    <div>
      <label htmlFor="name">Module Name:</label>
      <input type="text" disabled className="form-control mb-2" placeholder="" />
      <label htmlFor="name">Created By:</label>
      <input type="text" disabled className="form-control mb-2" placeholder="" />
      <label htmlFor="name">Module message:</label>
      <textarea className='form-control' disabled></textarea>
    </div>
  )
}

export default ModuleInfo;


