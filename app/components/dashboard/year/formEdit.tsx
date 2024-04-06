import React from "react";

const FormEdit = () => {
  return (
    <div>
      <form action="" method="post">
        <label htmlFor="name" className="form-label">
          Year Name:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="name"
          id="name"
          required
        />
      
        <button
          type="submit"
          name="edit_year"
          className="btn btn-success form-control"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default FormEdit;
