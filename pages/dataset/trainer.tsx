import "../../styles/trainer.scss";

const Trainer = () => {
  return (
    <>
      <div className="trainer-page">
        <h1 className="heading-text">Onos | Trainer</h1>

        <div className="trainer-row">
          <div className="container image-preview">
            <img
              src="https://i.ibb.co/5MGxPwF/Screen-Shot-2020-11-13-at-6-00-33-AM.png"
              alt="image to classify"
            />

            <ul className="classifications">
              <li>Storm</li>
              <li>Low Pressure Area</li>
              <li>Tropical Depression</li>
            </ul>
          </div>
          <div className="container image-collections">
            {/* <h1>images</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainer;
