const { default: MainNavigation } = require("../MainNavigation/MainNavigation");

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout