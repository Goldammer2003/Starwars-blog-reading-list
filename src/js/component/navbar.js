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
        <Link to="/demo">
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle px-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {store.favouritecards.length > 0
                ? store.favouritecards.map((item, index) => {
                    return (
                      <li className="navbar" key={index}>
                        <a class="dropdown-item" href="#">
                          {item}
                        </a>
                        <i
                          onClick={() => {
                            actions.deleteFavouriteItem(index);
                          }}
                          class="fa-solid fa-trash"
                        ></i>
                      </li>
                    );
                  })
                : "loading"}
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
