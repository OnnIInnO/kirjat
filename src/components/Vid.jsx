import video from "../videos/Lukemista_1.mov";

function Vid() {
  return (
    <div className="Vid">
        <h1>Lukemisen matkasta</h1>
        <video controls width="50%" >
          <source src={video} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
    </div>
  );
}

export default Vid;
