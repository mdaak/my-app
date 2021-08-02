import React from 'react';
import './HeaderMain.css';
import pic1 from '../Image/red grape.jpg';

const HeaderMain = () => {
  return (
    <main>
       <div className="row mt-5 ">
        <div className="col-md-4 offset-1 ">
          <h1>We Make Your Life Easy </h1><br />
          <p className=" mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ullam voluptatibus eum nulla veniam tempore porro asperiores eaque aut animi quam blanditiis laudantium voluptatum consequuntur mollitia, cumque odit nisi numquam.</p>
          <button className="btn btn-warning mt-5">Get Started</button>
        </div>
        <div className="col-md-6 HeaderImage">
          <img  src={pic1} alt="" />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;