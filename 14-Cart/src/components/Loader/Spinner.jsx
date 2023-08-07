import "./loader.css";

export default function Spinner() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="pulse"></div>
    </div>
  );
}
