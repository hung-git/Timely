const baseUrl = "http://localhost:3000/api/v1";
export const Event = {
    index() {
        return fetch(`${baseUrl}/events`)
            .then(res => res.json());
    },
    show(id) {
        // baseUrl + "/" + id => `${baseUrl}/${id}`
        return fetch(`${baseUrl}/events/${id}`)
            .then(res => res.json());
    },
    create(params) {
        return fetch(`${baseUrl}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    // update(params, id) {
    //     return fetch(`${baseUrl}/events/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         credentials: "include",
    //         body: JSON.stringify(params)
    //     }).then(res => res.json())
    // },
    // destroy(id) {
    //     return fetch(`${baseUrl}/events/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         credentials: "include"
    //     }).then(res => res.json())
    // }
}