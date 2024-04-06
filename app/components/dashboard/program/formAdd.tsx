import React from "react";

const FormAdd = () => {
  return (
    <div>
        <h5 className="text-center mb-3">Add New Program</h5>
      <form action="" method="post">
        <label htmlFor="name" className="form-label">
          Program Name:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="name"
          id="name"
          placeholder="Enter Program Name.."
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
          placeholder="Enter Program Code.."
          required
        />
        <label htmlFor="dept" className="form-label">
          Department:
        </label>
       <select name="dept" className="form-control mb-2">
        <option>Select</option>
       </select>
        <button
          type="submit"
          name="add_program"
          className="btn btn-primary form-control"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormAdd;
