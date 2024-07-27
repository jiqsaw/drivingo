import { IHighwayCode } from "@drivingo/models";
import { FC } from "react";



type HighwayCodeContentProps = {
  data: IHighwayCode[];
}

const HighwayCodeContent: FC<HighwayCodeContentProps> = ({ data }) => {
  return (
    <div>
      {
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.footNote}</p>
          </div>
        ))
      }
    </div>
  )
}

export default HighwayCodeContent;
