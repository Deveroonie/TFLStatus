import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OvergroundStatus() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://api.tfl.gov.uk/line/mode/overground/status");
        setResponse(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const [expandedLine, setExpandedLine] = useState(null);

  const handleLineClick = (lineId) => {
    if (expandedLine === lineId) {
      setExpandedLine(null);
    } else {
      setExpandedLine(lineId);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 text-white" style={{paddingTop: "16px"}}>
      {response.map(data => (
        <div key={data.id} className="p-4 bg-gray-800 rounded-lg">
          <div
            className="cursor-pointer font-bold mb-2 lnnm text-2xl flex"
            onClick={() => handleLineClick(data.id)}
          >
            {data.name} - {data.lineStatuses[0].statusSeverityDescription}&nbsp;<img src="/overground.png" width={64} h={64} alt={"Overground Logo"}></img>
          </div>
          {expandedLine === data.id && (
            <div className="mt-2 stnm text-lg">
              <p>{data.lineStatuses[0].reason || "Good Service"}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OvergroundStatus;
