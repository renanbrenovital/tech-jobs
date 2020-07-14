export default async (graphql_url:string, query:string) => {
  const response = await fetch(graphql_url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ query })
  });

  return response;
}