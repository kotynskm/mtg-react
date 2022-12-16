const fetchSetCards = async ({ queryKey }) => {
  // we use index 1, because that is where we specifiied the ID, the index 0 is "code"
  const code = queryKey[1];

  const res = await fetch(
    `https://api.magicthegathering.io/v1/cards?set=${code}`
  );

  if (!res.ok) {
    throw new Error(`sets/${code} fetch error`);
  }

  return res.json();
};

export default fetchSetCards;
