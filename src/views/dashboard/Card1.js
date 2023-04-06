import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const MyCard = () => {
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

  const [totalUnits, setTotalUnits] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = new Date();
      const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 2);
      const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      
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

export default MyCard;
