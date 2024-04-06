import React from "react";

const FormEdit = () => {
  return (
    <div>
      <form action="" method="post">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control  mb-2"
          name="name"
          id="name"
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
          required
        />
        <label htmlFor="role" className="form-label">
          Select Role:
        </label>
        <select name="role" className="form-control mb-2">
          <option value="1">HOD | Dean</option>
          <option value="3">Research Directorate</option>
          <option value="4">Lecturer</option>
        </select>

        <button
          type="submit"
          name="edit_admin"
          className="btn btn-success form-control"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default FormEdit;
