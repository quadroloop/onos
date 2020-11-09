const Image = () => {
  return (
    <div className="image-widget card-item">
      <small>
        <i className="la la-cube" />{" "}
        <span className="text-warning">MTSAT COLORED:</span> HIMAWARI-8
      </small>
      <img
        src="https://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/latest-him-colored.gif"
        alt="image-component"
      />
      <button>
        <i className="la la-crosshairs" /> Select
      </button>
    </div>
  );
};

export default Image;
