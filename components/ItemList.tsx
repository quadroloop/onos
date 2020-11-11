import SegmentCard from "./SegmentCard";
import moment from "moment";

const ItemList = (props: any) => {
  const { data } = props;

  const toggleTab = (id: string) => {
    let tab: any = document.getElementById(`row-${id}`);
    let content: any = document.getElementById(`delta-${id}`);

    if (tab) {
      if (!tab.classList.contains("active")) {
        tab.classList.add("active");
        content.style.display = "block";
      } else {
        tab.classList.remove("active");
        content.style.display = "none";
      }
    }
  };

  if (data) {
    toggleTab(data[0].date);
  }

  return (
    <>
      {data && (
        <ul className="item-list">
          {data.map((item: any) => {
            return (
              <>
                <li
                  id={`row-${item.date}`}
                  onClick={() => {
                    toggleTab(item.date);
                  }}
                >
                  {moment(item.date).format("MMM. D, YYYY")}
                  <i className="la la-chevron-circle-down" />
                  <i className="la la-chevron-circle-up" />
                </li>
                <div
                  className="delta"
                  id={`delta-${item.date}`}
                  style={{ display: "none" }}
                >
                  {item.data.map((ss: any) => {
                    return <SegmentCard data={ss} />;
                  })}
                </div>
              </>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ItemList;
