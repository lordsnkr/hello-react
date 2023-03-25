import "./App.css";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="columns-3">
          <img
            className="w-full aspect-video"
            src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
          />
          <img
            className="w-full aspect-video"
            src="https://thumbs.dreamstime.com/b/aerial-view-lago-antorno-dolomites-lake-mountain-landscape-alps-peak-misurina-cortina-di-ampezzo-italy-reflected-103752677.jpg"
          />
          <img
            className="w-full aspect-video"
            src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
          />
        </div>

        <div className="columns-2">
          <p>Well, let me tell you something, ...</p>
          <p className="break-after-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>

        <div className="columns-2">
          <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
            Hello
            <br />
            World
          </span>
          <br />
          <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
            Hello
            <br />
            World
          </span>
        </div>

        <div className="box-border h-32 w-32 p-4 border-4 border-red-400 mx-auto">
          <p className="mx-auto">content</p>
        </div>
      </div>
    </>
  );
};

export default App;
