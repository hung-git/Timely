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
    destroy(id) {
        return fetch(`${baseUrl}/events/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(res => res.json())
    }
}

// Session
export const Session = {
    create(params) {
        return fetch(`${baseUrl}/session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy() {
        return fetch(`${baseUrl}/session`, {
            method: 'DELETE',
            credentials: 'include',
        }).then(res => res.json())
    }
}

// User
export const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${baseUrl}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: params })
        }).then(res => res.json())
    }
}