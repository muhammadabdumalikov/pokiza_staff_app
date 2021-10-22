const url = "https://pokiza.herokuapp.com/graphql";

export const request = async (query, variables) => {
    let data = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: query,
            variables: variables,
        }),
    });
    let jsonData = await data.json();
    return jsonData.data;
};
