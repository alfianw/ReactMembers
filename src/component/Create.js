import React from "react";

const Create = () => {
  return (
    <div className="create">
      <form className="form">
        <label>
          <input type="text" name="name" placeholder="Nama Depan" id="name"/>
        </label>
        <div className="border"></div>
        <label>
          <input type="text" name="name" placeholder="Nama Belakang" id="name"/>
        </label>
        <input type="submit" value="Create" id="submit"/>
      </form>
    </div>
  );
};

export default Create;
