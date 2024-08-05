
import { HighwayCodeDataProvider } from "@drivingo/data-provider";
import { useState } from "react";
import HighwayCodeContent from "./Content";
import HighwayCodeDetail from "./Detail";
import HighwayCodeSigns from "./Signs";

const FeatHighwayCode = () => {

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const [filteredContents, setFilteredAllSigns] = useState(HighwayCodeDataProvider.getContentTopics());
  const [filteredSigns, setFilteredSigns] = useState(HighwayCodeDataProvider.getSignTopics());

  const handleSearch = (searchText: string) => {
    setSearch(searchText);
    setFilteredAllSigns(HighwayCodeDataProvider.getContentTopics(searchText));
    setFilteredSigns(HighwayCodeDataProvider.getContentTopics(searchText));
  };

  return (
    <div className="full">
      <input type="text" placeholder="Search" value={search} onChange={(e) => handleSearch(e.target.value)} />
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
