import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chefs = (props) => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div class="mx-auto w-full max-w-full rounded-md border border-blue-300 p-4 shadow">
        <div class="flex animate-pulse space-x-4">
          <div class="h-10 w-10 rounded-full bg-slate-700"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 rounded bg-slate-700"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-slate-700"></div>
                <div class="col-span-1 h-2 rounded bg-slate-700"></div>
              </div>
              <div class="h-2 rounded bg-slate-700"></div>
              <div class="text-lg font-medium text-gray-600">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const [countFavorite, setCountFavorite] = useState([]);
  const handleFavorite = (id) => {
    toast("Nice! successfully added to Favorites");
    setCountFavorite([...countFavorite, id]);
  };
  return (
    <div className="mb-8 grid grid-cols-3 gap-8">
      {props.chefs
        ? props.chefs.map((chef) => (
            <div key={chef.id} className="rounded shadow-lg">
              <img
                className="h-96 w-full object-cover"
                src={chef.imageURL}
                alt="Chef Picture"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-4xl font-bold">{chef.name}</div>
                <div className="my-4">
                  <div className="flex items-center space-x-1">
                    <span className="mr-2">
                      <FontAwesomeIcon
                        className="text-xl text-amber-900"
                        icon={faClock}
                      />
                    </span>
                    <p className="text-xl font-normal">
                      {chef.experience_years} Years of Experience
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="mr-2">
                      <FontAwesomeIcon
                        className="text-xl text-amber-900"
                        icon={faGlobe}
                      />
                    </span>
                    <p className="text-xl font-normal">
                      {chef.num_recipes} Recipes
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="mr-2">
                      <FontAwesomeIcon
                        className="text-xl text-amber-900"
                        icon={faThumbsUp}
                      />
                    </span>
                    <p className="text-xl font-normal">{chef.likes}</p>
                  </div>
                  <div className="mb-4 flex items-center space-x-1">
                    <span className="mr-2">
                      <FontAwesomeIcon
                        className="text-xl text-amber-900"
                        icon={faHeart}
                      />
                    </span>
                    <button
                      disabled={countFavorite.find((x) => chef.id === x)}
                      onClick={() => handleFavorite(chef.id)}
                      className={
                        countFavorite.find((x) => chef.id === x)
                          ? "cursor-not-allowed text-xl font-normal"
                          : "text-xl font-normal"
                      }
                    >
                      Add to Favorite
                    </button>
                    <ToastContainer
                      position="top-center"
                      autoClose={1300}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                    />
                  </div>
                  <Link
                    to={`/chef/${chef.id}`}
                    className="btn-brown block w-full px-5 py-2 text-center text-xl font-medium"
                  >
                    View Recipes
                  </Link>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Chefs;
