import { TrafficSignsDataProvider } from "@drivingo/data-provider";
import { ITrafficSign } from "@drivingo/models";
import { useState } from "react";
import './styles.scss';

const FeatTrafficSigns = () => {

    const allSigns = TrafficSignsDataProvider.getAll();

    const [search, setsearch] = useState("");
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

                {filteredAllSigns.length === 0 && <p>No signs found.</p>}

                {filteredAllSigns.length > 0 && (

                    filteredAllSigns.map((item, index) => {
                        return (
                            <div key={index} className="sign">
                                <figure className="data-image">
                                    <img
                                        src={TrafficSignsDataProvider.imgBasePath + item.imgPath}
                                        alt={""} />
                                </figure>
                                <p>{item.desc}</p>
                            </div>
                        );
                    })

                )}

            </div>
        </div>
    );
};

export default FeatTrafficSigns;
