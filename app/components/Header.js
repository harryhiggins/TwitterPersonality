import React from 'react';

const Header = ({handleSubmit, handleChange, value}) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1>Enter a twitter name to get started!</h1>
        <form className="form-inline">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white" id="basic-addon1">@</span>
            </div>
            <input type="text" className="form-control form-control-lg mr-sm-2" value={value} onChange={handleChange} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            <button className="btn btn-primary my-2 my-sm-0" type="submit"  onClick={handleSubmit}>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
