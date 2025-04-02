import React, { useState, useEffect } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_sankey from "highcharts/modules/sankey";
import HC_dependencyWheel from "highcharts/modules/dependency-wheel";

const Grafico = ({ twitterUsernames, title }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchFollowers = async (usernames) => {
    setLoading(true);
    setError("");
    setChartData([]);

    try {
      const followersMap = {};
      
      for (const username of usernames) {
        try {
          await new Promise(r => setTimeout(r, 2000)); // Delay to prevent 429 error
          const response = await axios.get(
            "https://twitter283.p.rapidapi.com/followers",
            {
              params: { username },
              headers: {
                "X-RapidAPI-Host": "twitter283.p.rapidapi.com",
                "X-RapidAPI-Key": "51540acd19msh3c8bbd7bbc57fc0p1cb82bjsn424a1b330ba5",
              },
            }
          );
          followersMap[username] = new Set(response.data.followers);
        } catch (err) {
          console.error(`Error fetching followers for ${username}:`, err);
          followersMap[username] = new Set();
        }
      }
      
      const processedData = [];
      usernames.forEach((userA, index) => {
        processedData.push([userA, "Followers", followersMap[userA].size]);
        for (let j = index + 1; j < usernames.length; j++) {
          const userB = usernames[j];
          const intersection = new Set(
            [...followersMap[userA]].filter(f => followersMap[userB].has(f))
          );
          processedData.push([userA, userB, intersection.size]);
          processedData.push([userB, userA, intersection.size]);
        }
      });
      
      setChartData(processedData);
    } catch (error) {
      setError("Hubo un error al obtener los seguidores.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (twitterUsernames && twitterUsernames.length > 0) {
      fetchFollowers(twitterUsernames);
    }
  }, [twitterUsernames]);

  const options = {
    title: {
      text: title,
    },
    chart: {
      backgroundColor: "none",
    },
    accessibility: {
      point: {
        valueDescriptionFormat:
          "{index}. From {point.from} to {point.to}: {point.weight}.",
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        keys: ["from", "to", "weight"],
        data: chartData,
        type: "dependencywheel",
        name: "Followers Intersection",
        dataLabels: {
          color: "#333",
          style: {
            textOutline: "none",
          },
          textPath: {
            enabled: true,
          },
          distance: 10,
        },
        size: "95%",
      },
    ],
  };

  return (
    <div className="w-4/6">
      {loading ? <p>Cargando datos...</p> : error ? <p style={{ color: "red" }}>{error}</p> : <HighchartsReact highcharts={Highcharts} options={options} />}
    </div>
  );
};

export default Grafico;