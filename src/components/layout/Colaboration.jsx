"use client";

const colaborationPromo = [
  "/assets/kolaborasi/kolaborasi1.webp",
  "/assets/kolaborasi/kolaborasi2.webp",
  "/assets/kolaborasi/kolaborasi3.webp",
  "/assets/kolaborasi/kolaborasi4.webp",
];

const Colaboration = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* colaboration banner */}
          <div className="w-full md:w-[35%] flex items-center justify-center ">
            <div className=" w-full h-[400px] flex items-center justify-center px-2 py-4">
              <img
                className="rounded-xl "
                src="/assets/kolaborasi/kolaborasi_banner1.webp"
                alt=""
              />
            </div>
          </div>

          {/* colaboration promo */}
          <div className="w-full md:w-[65%] h-[400px] flex flex-wrap">
            {colaborationPromo.map((item, index) => {
              return (
                <div className="flex w-1/2  px-1" key={index}>
                  <div className=" w-full h-[200px] flex items-center justify-center">
                    <img className="rounded-xl" src={item} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colaboration;
