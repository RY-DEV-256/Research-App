import React from "react";

const FormAdd = () => {
  return (
    <div>
        <h5 className="text-center mb-3">Add New Year</h5>
      <form action="" method="post">
        <label htmlFor="name" className="form-label">
          Year Name:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="name"
          id="name"
          placeholder="Enter Year Name.."
          required
        />
      
        <button
          type="submit"
          name="add_dept"
          className="btn btn-primary form-control"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormAdd;
