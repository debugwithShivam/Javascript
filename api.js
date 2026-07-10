
const BASE_URL = "https://jsonplaceholder.typicode.com";

// =====================================================
// 1. BASIC FETCH
// =====================================================

function basicFetch() {
    fetch(`${BASE_URL}/users`)
        .then(res => res.json())
        .then(data => {
            console.log("Basic Fetch");
            console.log(data);
        });
}

// =====================================================
// 2. THEN -> CATCH
// =====================================================

function thenCatch() {
    fetch(`${BASE_URL}/posts`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            return response.json();
        })
        .then(data => {
            console.log("Then Catch");
            console.log(data);
        })
        .catch(error => {
            console.error(error.message);
        });
}

// =====================================================
// 3. THEN -> CATCH -> FINALLY
// =====================================================

function thenCatchFinally() {
    fetch(`${BASE_URL}/comments`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            console.log("Request Finished");
        });
}

// =====================================================
// 4. ASYNC / AWAIT
// =====================================================

async function asyncAwait() {
    const response = await fetch(`${BASE_URL}/albums`);
    const data = await response.json();

    console.log(data);
}

// =====================================================
// 5. TRY CATCH
// =====================================================

async function tryCatch() {
    try {
        const response = await fetch(`${BASE_URL}/photos`);

        if (!response.ok) {
            throw new Error("Network Error");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.error(error);

    }
}

// =====================================================
// 6. TRY CATCH FINALLY
// =====================================================

async function tryCatchFinally() {

    try {

        const response = await fetch(`${BASE_URL}/todos`);

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    } finally {

        console.log("Completed");

    }
}

// =====================================================
// 7. POST REQUEST
// =====================================================

async function createPost() {

    try {

        const response = await fetch(`${BASE_URL}/posts`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                title: "Hello",
                body: "World",
                userId: 1,
            }),
        });

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

// =====================================================
// 8. PUT REQUEST
// =====================================================

async function updatePost() {

    const response = await fetch(`${BASE_URL}/posts/1`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({

            id: 1,
            title: "Updated",
            body: "Updated Body",
            userId: 1

        })

    });

    console.log(await response.json());

}

// =====================================================
// 9. PATCH REQUEST
// =====================================================

async function patchPost() {

    const response = await fetch(`${BASE_URL}/posts/1`, {

        method: "PATCH",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({

            title: "Patched Title"

        })

    });

    console.log(await response.json());

}

// =====================================================
// 10. DELETE REQUEST
// =====================================================

async function deletePost() {

    const response = await fetch(`${BASE_URL}/posts/1`, {

        method: "DELETE"

    });

    console.log(response.status);

}

// =====================================================
// 11. PROMISE.ALL
// =====================================================

async function promiseAll() {

    const [users, posts, comments] = await Promise.all([

        fetch(`${BASE_URL}/users`).then(r => r.json()),

        fetch(`${BASE_URL}/posts`).then(r => r.json()),

        fetch(`${BASE_URL}/comments`).then(r => r.json())

    ]);

    console.log(users);

    console.log(posts);

    console.log(comments);

}

// =====================================================
// 12. PROMISE.ALLSETTLED
// =====================================================

async function promiseAllSettled() {

    const result = await Promise.allSettled([

        fetch(`${BASE_URL}/users`).then(r => r.json()),

        fetch("https://wrong-url.com"),

        fetch(`${BASE_URL}/posts`).then(r => r.json())

    ]);

    console.log(result);

}

// =====================================================
// 13. PROMISE.RACE
// =====================================================

async function promiseRace() {

    const result = await Promise.race([

        fetch(`${BASE_URL}/users`),

        fetch(`${BASE_URL}/posts`)

    ]);

    console.log(await result.json());

}

// =====================================================
// 14. PROMISE.ANY
// =====================================================

async function promiseAny() {

    const result = await Promise.any([

        fetch("https://wrong.com"),

        fetch(`${BASE_URL}/users`),

        fetch(`${BASE_URL}/posts`)

    ]);

    console.log(await result.json());

}

// =====================================================
// 15. SEQUENTIAL REQUESTS
// =====================================================

async function sequentialRequests() {

    const user = await fetch(`${BASE_URL}/users/1`)
        .then(r => r.json());

    const posts = await fetch(`${BASE_URL}/posts?userId=${user.id}`)
        .then(r => r.json());

    console.log(user);

    console.log(posts);

}

// =====================================================
// 16. PARALLEL REQUESTS
// =====================================================

async function parallelRequests() {

    const userPromise = fetch(`${BASE_URL}/users/1`)
        .then(r => r.json());

    const postPromise = fetch(`${BASE_URL}/posts`)
        .then(r => r.json());

    const commentPromise = fetch(`${BASE_URL}/comments`)
        .then(r => r.json());

    const [user, posts, comments] = await Promise.all([

        userPromise,
        postPromise,
        commentPromise

    ]);

    console.log(user);

    console.log(posts);

    console.log(comments);

}

// =====================================================
// 17. CUSTOM HEADERS
// =====================================================

async function customHeaders() {

    const response = await fetch(`${BASE_URL}/posts`, {

        headers: {

            Authorization: "Bearer YOUR_TOKEN",

            "Content-Type": "application/json",

            Accept: "application/json"

        }

    });

    console.log(await response.json());

}

// =====================================================
// 18. REQUEST TIMEOUT
// =====================================================

async function fetchWithTimeout(url, timeout = 5000) {

    const controller = new AbortController();

    const timer = setTimeout(() => {

        controller.abort();

    }, timeout);

    try {

        const response = await fetch(url, {

            signal: controller.signal

        });

        clearTimeout(timer);

        return await response.json();

    } catch (error) {

        console.log(error);

    }

}

// =====================================================
// 19. ABORT REQUEST
// =====================================================

async function abortRequest() {

    const controller = new AbortController();

    const promise = fetch(`${BASE_URL}/posts`, {

        signal: controller.signal

    });

    controller.abort();

    try {

        const response = await promise;

        console.log(await response.json());

    } catch (error) {

        console.log("Request Cancelled");

    }

}

// =====================================================
// 20. GENERIC GET FUNCTION
// =====================================================

async function get(url) {

    const response = await fetch(url);

    if (!response.ok) {

        throw new Error("Request Failed");

    }

    return response.json();

}

// Usage
// get(`${BASE_URL}/users`).then(console.log);

// =====================================================
// 21. GENERIC POST FUNCTION
// =====================================================

async function post(url, body) {

    const response = await fetch(url, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(body)

    });

    return response.json();

}
