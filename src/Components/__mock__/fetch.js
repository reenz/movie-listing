const output = {
  Response: "True",
  Search: [
    {
      imdbID: 0,
      Title: "The First Movie",
      Poster: "./pathfor/firstMovie"
    },
    {
      imdbID: 1,
      Title: "The Second Movie",
      Poster: "./pathfor/secondMovie"
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