import React from "react";

const Home = () => {
  return (
    <div className="bg-yellow-100 w-[600%vh] h-[600vh] text-green-900 font-serif text-lg absolute">
      <h1 className="text-[70px] mb-7 mt-7">FOODIEZ</h1>
      <h1 className="text-[70px] mb-7 mt-8 text-orange-400">
        Grab life by the fork.
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img
            class="min-h-full min-w-full rounded-lg object-fill"
            src="https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div>
          <img
            class="min-h-full min-w-full rounded-lg object-fill"
            src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div>
          <img
            class="min-h-full min-w-full rounded-lg object-fill"
            src={`https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg`}
            alt=""
          />
        </div>
        <div>
          <img
            class="min-h-full min-w-full rounded-lg object-fill"
            src={`https://images.pexels.com/photos/3296432/pexels-photo-3296432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
            alt=""
          />
        </div>
        <div>
          <img
            class="min-h-full min-w-full rounded-lg object-fill"
            src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>

        <div>
          <img
            class="min-h-full min-w-full rounded-lg object-fill"
            src="https://images.pexels.com/photos/3304057/pexels-photo-3304057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>

      <div className="text-[25px] mt-5">
        Our mission at FOODIEZ is to make everyday cooking fun, because we
        believe that cooking is key to a happier and healthier life for people,
        communities and the planet. We empower homecooks all over the world to
        help each other by sharing recipes and cooking tips.
      </div>
    </div>
  );
};

export default Home;
