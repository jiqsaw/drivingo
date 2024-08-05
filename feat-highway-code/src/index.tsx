/* eslint-disable @typescript-eslint/no-var-requires */

import { IHighwayCode } from "@drivingo/models";

import { HighwayCodeDataProvider } from "@drivingo/data-provider";
import { useState } from "react";
import HighwayCodeContent from "./Content";
import HighwayCodeDetail from "./Detail";
import HighwayCodeSigns from "./Signs";

const FeatHighwayCode = () => {

  const contentTopics = HighwayCodeDataProvider.contentTopics;
  const signTopics = HighwayCodeDataProvider.signTopics;

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const [filteredContents, setFilteredAllSigns] = useState<IHighwayCode[]>(contentTopics);
  const [filteredSigns, setFilteredSigns] = useState<IHighwayCode[]>(signTopics);


  const handleFilter = (search: string) => {
    const filteredContents = contentTopics.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredAllSigns(filteredContents);

    const filteredSigns = signTopics.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
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
          <button onClick={() => setActiveTab(0)} className={activeTab === 0 ? "active" : ""}>
            Content
          </button>
          -
          <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : ""}>
            Signs
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

export { HighwayCodeDetail };

export default FeatHighwayCode;
