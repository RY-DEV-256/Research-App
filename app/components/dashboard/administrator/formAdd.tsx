import React from "react";

const FormAdd = () => {
  return (
    <div>
        <h5 className="text-center mb-3">Add New Administrator</h5>
      <form action="" method="post">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="name"
          id="name"
          placeholder="Enter Name.."
          required
        />
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control  mb-2"
          name="email"
          id="email"
          placeholder="Enter Email.."
          required
        />
        <label htmlFor="phone" className="form-label">
          Phone Number:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="phone"
          id="phone"
          placeholder="Enter Phone Number.."
          required
        />
        <label htmlFor="role" className="form-label">
          Select Role:
        </label>
        <select name="role" className="form-control mb-2">
          <option>Select</option>
          <option value="1">HOD | Dean</option>
          <option value="3">Research Directorate</option>
          <option value="4">Lecturer</option>
        </select>

        <button
          type="submit"
          name="add_admin"
          className="btn btn-primary form-control"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormAdd;
