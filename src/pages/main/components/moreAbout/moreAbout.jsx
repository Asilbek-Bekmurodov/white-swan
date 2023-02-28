import cls from "./moreAbout.module.scss";

function MoreAbout() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.bg} onMouseLeave={() => console.log("chiqtiiiii")}>
        <video
          autoPlay
          muted
          loop
          src="https://cdn.pixabay.com/vimeo/782374009/road-143479.mp4?width=1920&expiry=1678235131&hash=063a4a1c1ea688b23ce6e1e54b2d3d631c2c8caf"
        ></video>
      </div>
      <h3
        onMouseOver={(e) => {
          e.stopPropagation();
        }}
      >
        More about us
      </h3>
    </div>
  );
}
export default MoreAbout;
