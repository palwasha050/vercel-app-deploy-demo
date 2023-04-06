import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const MyCard2 = () => {
  const msn = {
    "23410651": "Chiller Main",
    "23410659": "Z1 LG Floor lights",
    "23820001": "Z1 Mezannine lights",
  };

  const [totalUnits, setTotalUnits] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = new Date();
      const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 2);
      const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      
      console.log("firstDay",firstDay);
      console.log("lastDay",lastDay)

      const tableData = await Promise.all(
        Object.entries(msn).map(async ([msnKey, nameValue]) => {
          let monthUnits = "not working";
          try {
            const monthData = await axios.post(
              "https://test.rcbchemicals.com/UnitsNoLoss",
              {
                msn: msnKey,
                startDate: firstDay.toISOString(),
                endDate: lastDay.toISOString(),
              }
            );
            monthUnits = monthData.data.units.toFixed(2);
            console.log(`MSN: ${msnKey}, Month: ${monthUnits}`);
          } catch (error) {
            console.log(`Error fetching data for MSN ${msnKey}: ${error}`);
          }

          return monthUnits;
        })
      );

      const totalUnits = tableData.reduce((acc, units) => {
        if (units !== "not working") {
          return acc + parseFloat(units);
        }
        return acc;
      }, 0);

      console.log(`Total units for month: ${totalUnits.toFixed(2)}`);
      setTotalUnits(totalUnits.toFixed(2));
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

  return (
    <Card>
      <Card.Body>
        <Card.Title>Units Used</Card.Title>
        <Card.Text>{totalUnits === "loading" ? "Loading..." : `${totalUnits}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard2;
