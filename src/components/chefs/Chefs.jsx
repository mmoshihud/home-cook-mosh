import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Chefs = (props) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {props.chefs.map((chef) => (
        <div key={chef.id} className="rounded shadow-lg">
          <img
            className="w-full"
            src="https://preview.milingona.co/themes/bakery/main/wp-content/uploads/2017/12/slide-1.jpg"
            alt="Chef Picture"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{chef.name}</div>
            <div className="my-4">
              <div className="flex items-center space-x-1">
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-xl text-amber-900"
                    icon={faClock}
                  />
                </span>
                <p className="text-xl font-semibold">
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
                <p className="text-xl font-semibold">
                  {chef.num_recipes} Recipes
                </p>
              </div>
              <div className="mb-4 flex items-center space-x-1">
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-xl text-amber-900"
                    icon={faThumbsUp}
                  />
                </span>
                <p className="text-xl font-semibold">{chef.likes}</p>
              </div>
              <Link
                to={`/chef/${chef.id}`}
                className="block w-full rounded-xl border-2 border-amber-900 bg-amber-900 px-5 py-2 text-center text-xl font-bold text-white hover:bg-transparent hover:text-amber-900"
              >
                View Recipes
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chefs;
