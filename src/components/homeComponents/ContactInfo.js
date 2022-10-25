import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-heart"></i>
            </div>
            <h5>Donate</h5>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-tree"></i>
            </div>
            <h5>Tree Planted</h5>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fa fa-globe"></i>
            </div>
            <h5>Save the world</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
