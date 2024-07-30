
import { FC } from "react";

import { contentsDetail, signsDetail } from '@drivingo/data';



type HighwayCodeDetailProps = {
  id: string;
}



const HighwayCodeDetail: FC<HighwayCodeDetailProps> = ({ id }) => {

  const allData = [...contentsDetail, ...signsDetail];

  const currentData = allData.find((item) => item.content_id === id);

  if (!currentData) {
    return <div>Not Found</div>
  }


  return (
    <div className="detail">
      <div dangerouslySetInnerHTML={
        {
          __html: currentData.details.body
        }}>
      </div>
    </div >
  )
}

export default HighwayCodeDetail;
