import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container pricing-table pt-3 pb-md-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card card-pricing shadow rounded-lg border-primary">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="card-title">FREE</h4>
              <h3 className="card-price">$0<span className="h6">/month</span></h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">✔ Single User</li>
                <li className="list-group-item">✔ 50GB Storage</li>
                <li className="list-group-item">✔ Unlimited Public Projects</li>
                <li className="list-group-item">✔ Community Access</li>
                <li className="list-group-item">✖ Unlimited Private Projects</li>
                <li className="list-group-item">✖ Free Subdomain</li>
                <li className="list-group-item">✖ Monthly Status Reports</li>
              </ul>
              <button type="button" className="btn btn-primary btn-block col-12">
                Button
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card card-pricing shadow rounded-lg border-primary">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="card-title">PLUS</h4>
              <h3 className="card-price">$9<span className="h6">/month</span></h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">✔ 5 Users</li>
                <li className="list-group-item">✔ 50GB Storage</li>
                <li className="list-group-item">✔ Unlimited Public Projects</li>
                <li className="list-group-item">✔ Community Access</li>
                <li className="list-group-item">✔ Unlimited Private Projects</li>
                <li className="list-group-item">✔ Free Subdomain</li>
                <li className="list-group-item">✖ Monthly Status Reports</li>
              </ul>
              <button type="button" className="btn btn-primary btn-block col-12">
                Button
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card card-pricing shadow rounded-lg border-primary">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="card-title">PRO</h4>
              <h3 className="card-price">$49<span className="h6">/month</span></h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">✔ Unlimited Users</li>
                <li className="list-group-item">✔ 50GB Storage</li>
                <li className="list-group-item">✔ Unlimited Public Projects</li>
                <li className="list-group-item">✔ Community Access</li>
                <li className="list-group-item">✔ Unlimited Private Projects</li>
                <li className="list-group-item">✔ Free Subdomain</li>
                <li className="list-group-item">✔ Monthly Status Reports</li>
              </ul>
              <button type="button" className="btn btn-primary btn-block col-12">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;