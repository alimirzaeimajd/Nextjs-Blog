import { Fragment } from "react";
import CustomNavbar from "./navbar";

function Layout(props) {
  return (
    <Fragment>
      <CustomNavbar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
