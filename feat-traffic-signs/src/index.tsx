/* eslint-disable @typescript-eslint/no-var-requires */

import { DATA_DIRECTION_SIGNS, DATA_INFORMATION_SIGNS, DATA_ROAD_WORKS_SIGNS, DATA_SIGNS_GIVING_ORDERS, DATA_WARNING_SIGNS } from "@drivingo/data";
import { ITrafficSign } from "@drivingo/models";
import { useState } from "react";


const FeatTrafficSigns = () => {

  const allSigns: ITrafficSign[] = [
    ...DATA_DIRECTION_SIGNS,
    ...DATA_INFORMATION_SIGNS,
    ...DATA_ROAD_WORKS_SIGNS,
    ...DATA_SIGNS_GIVING_ORDERS,
    ...DATA_WARNING_SIGNS,
    ...DATA_WARNING_SIGNS,
  ];

  const imgBaseUrl = "assets/images/traffic-signs/";

  const [search, setsearch] = useState("");
  // filter all signs state
  const [filteredAllSigns, setFilteredAllSigns] = useState<ITrafficSign[]>(allSigns);


  const handleFilter = (search: string) => {
    const filteredSigns = allSigns.filter((item) => item.desc.toLowerCase().includes(search.toLowerCase()));
    setFilteredAllSigns(filteredSigns);
  };


  return (
    <div className="full">
      <div className="search">
        <input type="text" placeholder="Search"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
            handleFilter(e.target.value);
          }}
        />
      </div>

      <div className="signs">
        {filteredAllSigns.length > 0 ? filteredAllSigns.map((item, index) => {
          return (
            <div key={index} className="sign">
              <figure style={{
                width: '100%',
                maxWidth: '200px',
                background: '#f0f0f0',
                padding: '10px',
                margin: '0 auto',
                height: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <img src={`${imgBaseUrl}${item.src}`} alt={""} />
              </figure>
              <p>{item.desc}</p>
            </div>
          )
        }) : <p>No signs found</p>}
      </div>
    </div>
  );
};


export default FeatTrafficSigns;
