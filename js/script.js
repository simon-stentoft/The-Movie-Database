async function fetchNowPlayingData() {
  const APIKey = "fb2d0289f8dc444a9994209489018bba";
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchNowPlayingData();

/* async function fetchData() {
  const APIReadAccessKey = "your_bearer_token_here";
  const URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${APIReadAccessKey}`,
    },
  };

  try {
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
} */
