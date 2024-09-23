import { TrafficSignsDataProvider } from "@drivingo/data-provider";
import { ITrafficSign } from "@drivingo/models";
import { useState } from "react";
import { UISearchBox, UITab } from "@drivingo/ui/components";
import List from "./List";
import './styles.scss';

const FeatTrafficSigns = () => {

    const [search, setsearch] = useState("");
    const [filteredDirectionSigns, setFilteredDirectionSigns] = useState<ITrafficSign[]>(TrafficSignsDataProvider.getdirectionSigns());
    const [filteredOrderSigns, setFilteredOrderSigns] = useState<ITrafficSign[]>(TrafficSignsDataProvider.getgivingOrderSigns());
    const [filteredInformationSigns, setFilteredInformationSigns] = useState<ITrafficSign[]>(TrafficSignsDataProvider.getinformationSigns());
    const [filteredWorksSigns, setFilteredWorksSigns] = useState<ITrafficSign[]>(TrafficSignsDataProvider.getroadWorksSigns());
    const [filteredWarningSigns, setFilteredWarningSigns] = useState<ITrafficSign[]>(TrafficSignsDataProvider.getwarningSigns());

    const handleSearch = (searchText: string) => {
        setsearch(searchText);
        setFilteredDirectionSigns(TrafficSignsDataProvider.getdirectionSigns(searchText));
        setFilteredOrderSigns(TrafficSignsDataProvider.getgivingOrderSigns(searchText));
        setFilteredInformationSigns(TrafficSignsDataProvider.getinformationSigns(searchText));
        setFilteredWorksSigns(TrafficSignsDataProvider.getroadWorksSigns(searchText));
        setFilteredWarningSigns(TrafficSignsDataProvider.getwarningSigns(searchText));
    };

    return (
        <div className="w-full flex-column gap-20">
            <UISearchBox text={search} onChange={handleSearch} />

            <UITab data={[
                {
                    title: "Giving orders",
                    content: <List data={filteredOrderSigns} title="Giving orders" description="Signs with red circles are mostly prohibitive. Plates below signs qualify their message." />
                },
                {
                    title: "Warning",
                    content: <List data={filteredWarningSigns} title="Warning" description="Signs with red circles are mostly prohibitive. Plates below signs qualify their message." />
                }, {
                    title: "Information",
                    content: <List data={filteredInformationSigns} title="Information" description="Signs with red circles are mostly prohibitive. Plates below signs qualify their message." />
                }, {
                    title: "Road works",
                    content: <List data={filteredWorksSigns} title="Road works" description="Signs with red circles are mostly prohibitive. Plates below signs qualify their message." />
                }, {
                    title: "Direction",
                    content: <List data={filteredDirectionSigns} title="Direction" description="Signs with red circles are mostly prohibitive. Plates below signs qualify their message." />
                }
            ]} />
        </div>
    );
};

export default FeatTrafficSigns;
