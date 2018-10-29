const FetchMovieList = async (title) => {
  const ApiKey = process.env.REACT_APP_ApiKey;
  if (title === "") {
    title = "Pirates of the Caribbean";
  }
  const URL = `http://www.omdbapi.com/?&s=${title}&type=movie&apiKey=${ApiKey}`;
  const apiCall  = await fetch(URL);
  const response = await apiCall.json();
  return response.Search 
}

export default FetchMovieList;