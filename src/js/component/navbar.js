import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3 m-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-auto">
        <div class="dropdown me-5">
          <button
            class="btn btn-primary dropdown-toggle px-3"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites  {store.favouritecards.length}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favouritecards.length > 0
              ? store.favouritecards.map((item, index) => {
                  return (
                    <li className="" key={index}>
                      <a className="dropdown-item" href="#">
                        {item} 
                       
                      </a>
                     
                      <button onClick={() => actions.deleteFavouriteItem(index)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </li>
                  );
                })
              : "loading"}
          </ul>
        
        </div>
      </div>
    </nav>
  );
};
