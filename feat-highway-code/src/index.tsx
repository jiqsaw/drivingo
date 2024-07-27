/* eslint-disable @typescript-eslint/no-var-requires */

import { contents, signs } from "@drivingo/data";
import { IHighwayCode } from "@drivingo/models";

import { useState } from "react";
import HighwayCodeContent from "./Content";
import HighwayCodeSigns from "./Signs";



const FeatHighwayCode = () => {

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);


  const [filteredContents, setFilteredAllSigns] = useState<IHighwayCode[]>(contents);
  const [filteredSigns, setFilteredSigns] = useState<IHighwayCode[]>(signs);


  const handleFilter = (search: string) => {
    const filteredContents = contents.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredAllSigns(filteredContents);

    const filteredSigns = signs.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredSigns(filteredSigns);

  };


  return (
    <div className="full">
      <input type="text" placeholder="Search" value={search} onChange={(e) => {
        setSearch(e.target.value);
        handleFilter(e.target.value);
      }} />
      <div className="tab">
        <div className="tab-menu">
          <button>
            <span onClick={() => setActiveTab(0)} className={activeTab === 0 ? "active" : ""}>Content</span>
          </button>
          <button>
            <span onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : ""}>Signs</span>
          </button>
        </div>
        <div className="tab-contents">
          {activeTab === 0 && <HighwayCodeContent data={filteredContents} />}
          {activeTab === 1 && <HighwayCodeSigns data={filteredSigns} />}
        </div>
      </div>
    </div>
  );
};


export default FeatHighwayCode;
