const url = "https://pokiza.herokuapp.com/graphql";

export const request = (query, variables) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: query,
            variables: variables,
        }),
    })
        .then((res) => res.json())
        .then((result) => console.log(result));
} 