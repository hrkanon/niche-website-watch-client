import React from "react";
import "./Dashboard.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import MyOrders from "../MyOrders/MyOrders";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import AllOrders from "../AllOrders/AllOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Payment from "../Payment/Payment";
import ManageProducts from "../ManageProducts/ManageProducts";
import useAuth from "../../Hooks/useAuth";
import AddReview from "../AddReview/AddReview";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, user, handleSignOut } = useAuth();

  return (
    <div className=" mt-4 dashboard-sec mx-auto">
      <div className="row">
        <div className="col-md-3 col-12 dashboard-menu py-3">
          {user.role === "admin" ? (
            <h4 className="text-center fw-bold">Admin Dashboard</h4>
          ) : (
            <h4 className="text-center fw-bold">
              {user?.displayName} Dashboard
            </h4>
          )}
          <div className="underline-div mx-auto mb-3"></div>
          <div className="px-3">
            <p>
              <Link
                to={`${url}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <i class="fas fa-shopping-cart me-2"></i> My Order
              </Link>
            </p>
            {admin && (
              <>
                <p>
                  <Link
                    to={`${url}/allOrders`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <i class="fas fa-list me-2"></i> Manage Orders
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${url}/makeAdmin`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <i class="fas fa-user-plus me-2"></i> Make Admin
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${url}/addProduct`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <i class="fas fa-plus-square me-2"></i> Add Product
                  </Link>
                </p>
                <p>
                  <Link
                    to={`${url}/manageProducts`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <i class="fas fa-cog me-2"></i> Manage Products
                  </Link>
                </p>
              </>
            )}
            <div>
              <p>
                <Link
                  to={`${url}/payment`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <i class="fab fa-amazon-pay me-2"></i> Payment
                </Link>
              </p>
              <p>
                <Link
                  to={`${url}/review`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <i class="fas fa-comment-dots me-2"></i>Review
                </Link>
              </p>
            </div>
            <p className="sign-out" onClick={handleSignOut}>
              <i class="fas fa-sign-out-alt me-2"></i>Log Out
            </p>
          </div>
        </div>
        <div className="col-md-9 col-12 border-start">
          <Switch>
            <AdminRoute path={`${path}/allOrders`}>
              <AllOrders></AllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <Route exact path={`${path}`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/review`}>
              <AddReview></AddReview>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
