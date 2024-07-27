import { IHighwayCode } from "@drivingo/models";
import { FC } from "react";


type HighwayCodeSignsProps = {
  data: IHighwayCode[];
}

const HighwayCodeSigns: FC<HighwayCodeSignsProps> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.footNote}</p>
        </div>
      ))}
    </div>
  )
}

export default HighwayCodeSigns;
