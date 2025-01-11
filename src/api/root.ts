//const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5565/api';

export function fetcher<T>(url: string, options?: RequestInit) {
    const token = localStorage.getItem('token');
    return fetch(`http://34.159.179.66/api/${url}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : '',
            ...options?.headers,
        },
        ...options as RequestInit,
    }).then(response => {
        if (!response.ok) {
            throw new Error('An error occurred while fetching the data.');
        }
        return response.json() as T;
    })
}