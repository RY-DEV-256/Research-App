import React from "react";

const FormAdd = () => {
  return (
    <div>
        <h5 className="text-center mb-3">Add New Department</h5>
      <form action="" method="post">
        <label htmlFor="name" className="form-label">
          Department Name:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="name"
          id="name"
          placeholder="Enter Department Name.."
          required
        />
        <label htmlFor="faculty" className="form-label">
          Faculty Name:
        </label>
        <select name="faculty" className="form-control mb-3" required>
          <option>Select</option>
          <option value="1">Computing and Information Sciences</option>
        </select>
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
