const BASE_URL = "http://localhost:8080";

async function request(url, options = {}) {
    const token = localStorage.getItem("token");

    const isFormData = options.body instanceof FormData;

    const headers = {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(!isFormData ? { "Content-Type": "application/json" } : {}),
        ...options.headers,
    };

    const config = {
        method: options.method,
        headers,
        body: isFormData ? options.body : options.body ? JSON.stringify(options.body) : undefined,
        credentials: "include",
    };

    const res = await fetch(BASE_URL + url, config);
    const data = await res.json().catch(() => ({}));

    if (res.status === 401) {
        const refreshRes = await fetch(BASE_URL + "/api/user/refreshToken", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        const refreshData = await refreshRes.json();

        if (refreshData.ok) {
            localStorage.setItem("token", refreshData.data.accessToken);
            // alert("new token:" + refreshData.data.accessToken);
            return request(url, options);
        } else {
            localStorage.removeItem("token");
            throw new Error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
        }
    }

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
};
