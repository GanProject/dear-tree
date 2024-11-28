export default function InitScreen() {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src="/video/init_screen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
