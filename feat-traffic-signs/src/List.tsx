
import { TrafficSignsDataProvider } from "@drivingo/data-provider";
import { ITrafficSign } from "@drivingo/models";
import { UIMasonryImageList } from "@drivingo/ui/components";
import { FC } from "react";

type ListProps = {
    title: string;
    description: string;
    data: ITrafficSign[];
};

const List: FC<ListProps> = ({ data, description }) => {

    const dataMaping = data.map((item: ITrafficSign, index) => {
        return {
            image: item.imgPath,
            title: item.desc
        }
    });

    return (
        <>
            <div>
                {description}
            </div>
            <UIMasonryImageList data={dataMaping} imgBasePath={TrafficSignsDataProvider.imgBasePath} />
        </>
    );
};

export default List;
