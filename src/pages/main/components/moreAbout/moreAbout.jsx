import cls from "./moreAbout.module.scss";

function MoreAbout() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.bg} onMouseLeave={() => console.log("chiqtiiiii")}>
        <video
          autoPlay
          muted
          loop
          src="https://files.fm/u/d425yjmfd#/view/p3nrs9gc8"
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
