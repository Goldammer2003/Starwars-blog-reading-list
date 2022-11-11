const getState = ({ getStore, getActions, setStore }) => {
  const base_url = "https://www.swapi.dev/api";

  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      favouritecards: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadDataOfCharacters: () => {
        fetch("https://swapi.dev/api/people", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((charactersdata) => setStore({ characters: charactersdata }));
      },

      loadDataOfPlanets: () => {
        fetch("https://swapi.dev/api/planets", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((planetdata) => setStore({ planets: planetdata }));
      },

      loadDAtaOfVehicles: () => {
        fetch("https://swapi.dev/api/vehicles", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((vehiclesdata) => setStore({ vehicles: vehiclesdata }));
      },

      addFavouritestoList: (favourites) => {
        const newFavourite = getStore().favouritecards;
        newFavourite.push(favourites);
        setStore({ favouritecards: newFavourite });
      },

      deleteFavouriteItem: (index) => {
        console.log("this is the store", getStore());
        let newFavouritecards = getStore().favouritecards.filter(
          (item, i) => index != i
        );
        setStore({ favouritecards: newFavouritecards });
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
