import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

const DTable = () => {
  const msn = {
    "23410651": "Chiller Main",
    "23410659": "Z1 LG Floor lights",
    "23820001": "Z1 Mezannine lights",
    "23410648": "Z1 Groud Floor Lights",
    "23410660": "Z1 Shopping Mall Lifts",
    "23410650": "Z1 Office Lifts",
    "23410653": "Z1 Pump room",
    "23410652": "Z1 Parking to GF Lift",
    "23410654": "Z1 Main Breaker",
    "24310656": "Z2 Sewerage Pump",
    "22491086": "Z2 Mezannine Lights",
    "23410647": "Z2 LG Floor Lights",
    "23410643": "Z2 Ground Floor Lights",
    "23410655": "Z2 Main Breaker",
    "23410645": "Apartment Lifts",
    "23410646": "Z2 Parking Lights",
    "23410661": "Z1 Parking Lights",
  };

  const columns = [
    {
      name: "Name",
      options: {
        filter: true,
      },
    },
    {
      name: "MSN",
      options: {
        filter: true,
      },
    },
    {
      name: "Day Before Yesterday",
      options: {
        filter: true,
        customHeadRender: () => {
          const currentDate = new Date();
          const yesterdayDate = new Date(currentDate);
          yesterdayDate.setDate(currentDate.getDate() - 2);
          const formattedDate = yesterdayDate.toLocaleDateString();
          return <div>{`(${formattedDate})`}</div>;
        },
      },
    },
    {
      name: "Yesterday",
      options: {
        filter: true,
      },
    },
    {
      name: "Today",
      options: {
        filter: true,
      },
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = new Date();
      const yesterdayDate = new Date(currentDate);
      yesterdayDate.setDate(currentDate.getDate() - 1);
      const dayBeforeYDate = new Date(currentDate);
      dayBeforeYDate.setDate(currentDate.getDate() - 2);
  
      const tableData = await Promise.all(
        Object.entries(msn).map(async ([msnKey, nameValue]) => {
          let dayBeforeYUnits = "not working";
          let yesterdayUnits = "not working";
          let todayUnits = "not working";
          try {
            const [dayBeforeYData, yesterdayData, todayData] = await Promise.all([
              axios.post("https://test.rcbchemicals.com/UnitsNoLoss", {
                msn: msnKey,
                startDate: new Date(
                  dayBeforeYDate.getFullYear(),
                  dayBeforeYDate.getMonth(),
                  dayBeforeYDate.getDate() + 1,
                  0,
                  0,
                  1,
                  129
                ).toISOString(),
                endDate: new Date(
                  dayBeforeYDate.getFullYear(),
                  dayBeforeYDate.getMonth(),
                  dayBeforeYDate.getDate(),
                  23,
                  59,
                  59,
                  0
                ).toISOString(),
              }),
              axios.post("https://test.rcbchemicals.com/UnitsNoLoss", {
                msn: msnKey,
                startDate: new Date(
                  yesterdayDate.getFullYear(),
                  yesterdayDate.getMonth(),
                  yesterdayDate.getDate() + 1,
                  0,
                  0,
                  1,
                  129
                ).toISOString(),
                endDate: new Date(
                  yesterdayDate.getFullYear(),
                  yesterdayDate.getMonth(),
                  yesterdayDate.getDate(),
                  23,
                  59,
                  59,
                  0
                ).toISOString(),
              }),
              axios.post("https://test.rcbchemicals.com/UnitsNoLoss", {
                msn: msnKey,
                startDate: new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  currentDate.getDate() + 1,
                  0,
                  0,
                  1,
                  129
                ).toISOString(),
                endDate: new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  currentDate.getDate(),
                  23,
                  59,
                  59,
                  0
                ).toISOString(),
              }),
            ]);
  
            dayBeforeYUnits = dayBeforeYData.data.units.toFixed(2);
            yesterdayUnits = yesterdayData.data.units.toFixed(2);
            todayUnits = todayData.data.units.toFixed(2);
  
            console.log(
              `MSN: ${msnKey}, Day Before Yesterday: ${dayBeforeYUnits}, Yesterday: ${yesterdayUnits}, Today: ${todayUnits}`
            );
          } catch (error) {
            console.log(`Error fetching data for MSN ${msnKey}: ${error}`);
          }
  
          return [nameValue, msnKey, dayBeforeYUnits, yesterdayUnits, todayUnits];
        })
      );
  
      setData(tableData);
    };
  
    fetchData();
  
    // set an interval to fetch new data every 1 minute
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);
  
    // clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "scroll",
  };

  return (

    <MUIDataTable
      title={"Reports"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default DTable;
