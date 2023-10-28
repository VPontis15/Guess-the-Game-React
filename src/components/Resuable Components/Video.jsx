import styles from "./Video.module.css";
import bg_video from "./bg_video.mp4";

export default function Video() {
  return (
    <div className="overlay">
      <video className={styles.video} autoPlay loop muted>
        <source src={bg_video} type="video/mp4" />
        <source src={bg_video} type="video/ogg" />
      </video>
    </div>
  );
}
