const Recipe = () => {
  return (
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
            By <span className="font-bold">Heisenberg</span>
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
  );
};

export default Recipe;
