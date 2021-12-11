const HomePage = () => {
  return (
    <section id="gif_section">
        <video
          className="img_gif"
          src="/media/vinyl.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          disablePictureInPicture={true}
          disableRemotePlayback={true}
          playsInline={true}
        />
    </section>
  )
};

export default HomePage;