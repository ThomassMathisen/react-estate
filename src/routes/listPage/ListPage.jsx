import "./listPage.scss";
import { listData } from "../../lib/dummydata";

const ListPage = () => {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">{data.map((item) => )}</div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
};

export default ListPage;
