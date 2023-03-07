import cls from "./moreAbout.module.scss";

function MoreAbout() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.bg} onMouseLeave={() => console.log("chiqtiiiii")}>
        <video autoPlay muted loop src="/public/trucks-37379.mp4"></video>
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
