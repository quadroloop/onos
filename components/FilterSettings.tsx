import ReactSlider from "react-slider";

const FilterSettings = () => {
  return (
    <>
      <div className="card-item slider-segment">
        <div className="filter-sliders">
          <small>
            <i className="la la-adjust" /> OPACITY
          </small>
          <ReactSlider
            className="onos-slider"
            thumbClassName="s-thumb"
            trackClassName="s-track"
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </div>
      </div>

      <div className="card-item slider-segment">
        <div className="filter-sliders">
          <small>
            <i className="la la-sun" /> BRIGHTNESS
          </small>
          <ReactSlider
            className="onos-slider"
            thumbClassName="s-thumb"
            trackClassName="x-track"
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default FilterSettings;
