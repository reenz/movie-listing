const output = {
  Search: [
    {
      imdbID: 0,
      Title: "Pirates of the Caribbean: Dead Man's Chest",
      Poster: ""
    },
    {
      imdbID: 1,
      Title: "Pirates of the Caribbean: At World's End",
      Poster: ""
    }
  ]
}

const fakeFetch = ()  => {
  return Promise.resolve({
    json: () =>
      Promise.resolve(output)
    }
  )
}

export default fakeFetch;