const Home = () => {
  return (
    <>
      <div className="carousel-center carousel rounded-box mb-8">
        <div className="carousel-item">
          <img
            src="https://good-food.cmsmasters.net/wp-content/uploads/2015/11/slide-1.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://good-food.cmsmasters.net/wp-content/uploads/2017/07/slide-5.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://good-food.cmsmasters.net/wp-content/uploads/2017/07/slide-4.jpg"
            alt="Pizza"
          />
        </div>
      </div>
      <h1 className="mb-8 text-center text-2xl font-bold">
        Explore Recipe by Our Chefs
      </h1>
      <div class="grid grid-cols-3 gap-8">
        <div class="rounded shadow-lg">
          <img
            class="w-full"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold">The Coldest Sunset</div>
            <p class="mb-4 text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et
            </p>

            <p>
              <span>
                <img
                  className="mr-4 inline w-8 rounded-full"
                  src="https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/profile-image-100x100.jpg"
                  alt=""
                />
              </span>
              By <span className="font-bold">Heigenburge</span>
            </p>
          </div>
          <div class="px-6 pb-2 pt-4">
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #1 hr 20 mins
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #Dessert
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
