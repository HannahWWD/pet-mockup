import { useEffect, useState } from "react";
import axios from "axios";
import { uniqueNamesGenerator, names } from "unique-names-generator";

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export default function MockCatProfiles() {
  /* main profile storage */
  const [data, setData] = useState(null);
  const profileContainer = [];

  /* [year,month] */
  const catAges = [
    [5, 1],
    [10, 2],
    [7, 10],
    [1, 3],
    [0, 5],
    [1, 1],
    [1, 3],
    [0, 2],
    [5, 3],
    [1, 3],
    [2, 4],
    [7, 1],
    [2, 11],
    [3, 1],
    [4, 5],
    [1, 2],
    [3, 3],
    [0, 4],
  ];

  const catTags = [
    "meek",
    "friendly",
    "stable",
    "confident",
    "young",
    "protective",
  ];

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/collections/21955434/photos", {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_PET_API_KEY}`,
        },
        params: {
          page: 1,
          per_page: 30,
        },
      })
      .then((response) => {
        const responseData = response.data;
        setData(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (data !== null) {
    for (let i = 0; i < catAges.length; i++) {
      const profileEntry = {
        link: data[i].urls.raw + "&w=800",
        name: uniqueNamesGenerator({
          dictionaries: [names],
          length: 1,
        }),
        age: catAges[i],
        tags: shuffle(catTags).slice(0, 2),
      };
      profileContainer.push(profileEntry);
    }

    console.log(profileContainer);
  }
}
