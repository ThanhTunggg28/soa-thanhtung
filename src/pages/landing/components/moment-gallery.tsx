const MomentGallery = () => {
  const images = [
    { src: "https://source.unsplash.com/200x200/?avocado", bg: "bg-purple-300" },
    { src: "https://source.unsplash.com/200x200/?cherry", bg: "bg-teal-300" },
    { src: "https://source.unsplash.com/200x200/?mandarin", bg: "bg-blue-300" },
    { src: "https://source.unsplash.com/200x200/?orange", bg: "bg-blue-400" },
  ];

  return (
    <section className="py-10 px-6 max-w-6xl mx-auto text-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <p className="text-gray-600 text-left">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h2 className="text-xl font-bold text-right">
          IMMORTALISEZ DES MOMENTS INOUBLIABLES AVEC <span className="text-red-500">#BASIC</span>
        </h2>
      </div>

      <div className="bg-blue-100 p-6 rounded-xl shadow-lg mt-6">
        <div className="relative">
          <img
            src="https://source.unsplash.com/600x400/?fruit"
            alt="Fruit Plate"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md text-left">
            <h3 className="font-bold">La famille</h3>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg text-sm">24 Sep 2024</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {images.map((image, index) => (
          <div key={index} className={`${image.bg} p-4 rounded-lg shadow-md relative`}>
            <img src={image.src} alt="" className="w-full rounded-md" />
            <div className="absolute bottom-2 left-2 text-white text-xs">
              <p>👤 Anthony Durand</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Consultez @BASIC et <span className="text-red-500">#BASIC</span> pour découvrir les expériences inoubliables.
      </p>
    </section>
  );
};

export default MomentGallery;
