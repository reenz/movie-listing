const output = {
  Search: [
    {
      imdbID: 0,
      Title: "The First Movie",
      Poster: ""
    },
    {
      imdbID: 1,
      Title: "The Second Movie",
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