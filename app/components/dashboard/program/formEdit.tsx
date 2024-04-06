import React from "react";

const FormEdit = () => {
  return (
    <div>
      <form action="" method="post">
        <label htmlFor="name" className="form-label">
          Program Name:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="name"
          id="name"
          required
        />
        <label htmlFor="code" className="form-label">
          Program Code:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="code"
          id="code"
          required
        />
        <label htmlFor="dept" className="form-label">
          Department:
        </label>
       <select name="dept" className="form-control mb-2">
        <option></option>
       </select>
        <button
          type="submit"
          name="edit_program"
          className="btn btn-success form-control"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default FormEdit;
