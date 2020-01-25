# Evaluating Articles with Natural Language Processing

This project uses the [AYLIEN Text Analysis API](https://aylien.com/text-api/) to implement Natural Language Processing (NLP) on news articles. [Wikipedia](https://en.wikipedia.org/wiki/Natural_language_processing) states that: 

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

A website URL is submitted, and the content of the page is analyzed. The article can be subjective (opinion) or objective (fact-based) and can also be positive, neutral, or negative in tone.

Found in this project are:
- Webpack
- Sass styles
- Webpack Loaders and Plugins
- Service workers
- [AYLIEN API](https://aylien.com/text-api/)

## Configuration

1) Clone the repository

2) `cd` into your new folder and run:
`npm install`

3) Create a new .env file containing the following environment variables for the AYLIEN API:

- API_ID
- API_KEY

4) Run `npm run dev-prod` in the terminal

5) Open another terminal and run:

- `npm start` to start your Node.js server
