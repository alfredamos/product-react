import { Link } from "react-router-dom";

export function AdminPanel() {
  return (
    <div className="row mt-5">
      <div className="col col-sm-6 offset-3">
        <div className="card shadow-lg p-5 border-2 border-primary">
          <div className="card-body p-lg-5">
            <h1 className="text-primary">Admin Panel</h1>
            <table className="table table-striped table-bordered table-responsive">
              <thead>
                <tr>
                  <th className="fw-bold">Products</th>
                  <th className="fw-bold">Users</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link className="link-primary fw-bold" to="/list-product">
                      List Product &#10148;
                    </Link>
                  </td>
                  <td>
                    <Link className="link-primary fw-bold" to="/users">
                      List User &#10148;
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link
                      className="link-secondary fw-bold"
                      to="/list-product/create"
                    >
                      Create Product &#10148;
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="link-secondary fw-bold"
                      to="/users/create"                      
                    >
                      Create User &#10148;
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link className="link-success fw-bold" to="/list-product">
                      Update Feature &#10148;
                    </Link>
                  </td>
                  <td>
                    <Link className="link-success fw-bold" to="/users">
                      Update Role &#10146;
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
