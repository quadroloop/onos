import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import Widget from "./Widget";
import axios from "axios";
import moment from "moment";

const filterDefaults = () => {
  let defaults = {
    opacity: 100,
    hue: 0,
    brightness: 90,
    contrast: 120,
  };

  if (process.browser) {
    if (!localStorage.filters) {
      return defaults;
    } else {
      return JSON.parse(localStorage.filters);
    }
  } else {
    return defaults;
  }
};

const FilterSettings = () => {
  const [opacity, setOpacity] = useState<number>(filterDefaults().opacity);
  const [brightness, setBr] = useState<number>(filterDefaults().brightness);
  const [hue, setHue] = useState<number>(filterDefaults().hue);
  const [contrast, setContrast] = useState<number>(filterDefaults().contrast);
  const [info, setInfo] = useState<any>(null);

  const saveSettings = () => {
    let filters = {
      opacity: opacity,
      hue: hue,
      brightness: brightness,
      contrast: contrast,
    };

    let filtersStyle = `opacity(${opacity}%) contrast(${contrast}%) hue-rotate(${hue}deg) brightness(${brightness}%)`;

    let mainImage: any = document.getElementById("main-image");

    mainImage.style = `filter:${filtersStyle};`;
    localStorage.filters = JSON.stringify(filters);
    localStorage.filterStyle = filtersStyle;
  };

  useEffect(() => {
    axios.get("/api").then((res: any) => {
      setInfo(res.data.info);
    });
  });

  return (
    <>
      <p className="text-header">
        <i className="la la-database" /> Dataset Info
      </p>

      <Widget
        value={info && info.dataset_size}
        icon={"la-layer-group"}
        title={"DATASET SIZE"}
        subtitle={
          info &&
          `Last updated: ${moment(info.last_update).format("MMM D, YYYY")}`
        }
      />

      <p className="text-header">
        <i className="la la-gear" /> Image Filter Settings
        <br />
        <small>
          You may adjust the main image filter according to your preference.
        </small>
      </p>
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
            defaultValue={opacity}
            onAfterChange={(value: any) => {
              setOpacity(value);
            }}
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
            defaultValue={brightness}
            max={200}
            min={0}
            onAfterChange={(value: any) => {
              setBr(value);
            }}
          />
        </div>
      </div>

      <div className="card-item slider-segment">
        <div className="filter-sliders">
          <small>
            <i className="la la-swatchbook" /> HUE ROTATE
          </small>
          <ReactSlider
            className="onos-slider"
            thumbClassName="s-thumb"
            trackClassName="y-track"
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            defaultValue={hue}
            max={1000}
            min={0}
            onAfterChange={(value: any) => {
              setHue(value);
            }}
          />
        </div>
      </div>

      <div className="card-item slider-segment">
        <div className="filter-sliders">
          <small>
            <i className="la la-swatchbook" /> Contrast
          </small>
          <ReactSlider
            className="onos-slider"
            thumbClassName="s-thumb"
            trackClassName="y-track"
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            defaultValue={contrast}
            max={200}
            min={0}
            onAfterChange={(value: any) => {
              setContrast(value);
            }}
          />
        </div>
      </div>

      <button className="save-btn" onClick={saveSettings}>
        Apply Changes
      </button>
    </>
  );
};

export default FilterSettings;
