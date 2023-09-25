import Link from "next/link";
import classes from "./MainNavigation.module.scss";

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <div className="wrapper">
        <div>
          <Link href={"/"}>
            Vander<span className="highlighted">Amazing</span>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Bestsellery</a>
            </li>
            <li>
              <a href="">Zespół</a>
            </li>
            <li>
              <a href="">Sklep</a>
            </li>
                
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
