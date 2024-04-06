import React from "react";

const FormEdit = () => {
  return (
    <div>
      <form action="" method="post">
        <label htmlFor="name" className="form-label">
          Department Name:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="name"
          id="name"
          required
        />
         <label htmlFor="faculty" className="form-label">
          Faculty Name:
        </label>
        <select name="faculty" className="form-control mb-3" required>
          <option value=""></option>
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
