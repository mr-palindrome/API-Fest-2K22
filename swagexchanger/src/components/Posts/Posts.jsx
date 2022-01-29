import { React, useEffect, useState } from "react";
import { SwagCard } from "../SwagCard/SwagCard";
import css from "./Posts.module.css";
import axios from "axios";

export const Posts = () => {
  const [swagsData, setSwagsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://schwagx.herokuapp.com/swags/")
      .then((res) => {
        console.log(res.data);
        setSwagsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={css.items}>
      {swagsData.map((d) => (
        <SwagCard
          key={d._id}
          details={d.description}
          image={d.image}
          owner={d.owner}
          name={d.name}
          size={d.size}
          count={d.count}
          category={d.category}
        />
      ))}
    </div>
  );
};
