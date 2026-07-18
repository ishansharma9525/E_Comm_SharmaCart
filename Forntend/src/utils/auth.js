export const saveTokens = (token) => {
    localStorage.setItem("access_token", token.access);
    localStorage.setItem("refresh_token",token.refresh);
};

export const clearToken= () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
};

export const getAccessToken = () => {
    return localStorage.getItem("access_token");
};

export const authFetch = async (url, option = {}) => {
    const token = getAccessToken();
    const headers = option.headers ? {...option.headers}: {};

    if(token) headers["Authorization"] = `Bearer ${token}`;
    headers["Content-Type"] = "application/json";
    return fetch(url, {...option, headers});
};