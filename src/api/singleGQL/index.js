export default async function (postType, query) {
  try {
    const response = await fetch(`${import.meta.env.STRAPI_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        query: query,
        variables: {},
      }),
    });
    const json = await response.json();
    return json.data[postType].data;
  } catch (error) {
    console.error(error);
  }
}
