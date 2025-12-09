const BASE_URL = "http://localhost:8080"

async function request(url, options = {}) {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
    };

    const config = {
        method: options.method,
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
    }

    const res = await fetch(BASE_URL + url, config);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        throw new Error(data.message || "Có lỗi xảy ra");
    }

    return data;

}

export default {
    get: (url) => request(url),
    post: (url, body) => request(url, { method: "POST", body }),
    put: (url, body) => request(url, { method: "PUT", body }),
    delete: (url) => request(url, { method: "DELETE" }),
}