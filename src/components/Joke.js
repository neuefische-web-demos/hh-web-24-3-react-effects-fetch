import { useState, useEffect } from 'react';

export default function Joke() {
  const [joke, setJoke] = useState({});
  const [jokeID, setJokeID] = useState(0);

  console.log('THE JOKE_', joke);
  console.log('THE JOKE ID_', jokeID);

  // useEffect Hook:
  // useEffect(() => {  }, [ ] )

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(`https://example-apis.vercel.app/api/bad-okes/${jokeID}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const fetchedJoke = await response.json();

        setJoke(fetchedJoke);
      } catch (error) {
        console.error('The error:', error);
      }
    }

    startFetching();
  }, [jokeID]);

  return (
    <>
      <h1>{joke.joke}</h1>
      <button
        type="button"
        onClick={() => {
          setJokeID(joke.nextId);
        }}>
        Next Joke
      </button>
    </>
  );
}
