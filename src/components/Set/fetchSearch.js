const fetchSearch = async ({ queryKey }) => {
  // we use index 1, because that is where we specifiied the ID, the index 0 is "type"
  const type = queryKey[1];

  const res = await fetch(
    `https://api.magicthegathering.io/v1/sets?type=${type}`
  );

  if (!res.ok) {
    throw new Error(`sets/${type} fetch error`);
  }

  return res.json();
};

export default fetchSearch;
