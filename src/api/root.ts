//const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5565/api';

export function fetcher<T>(url: string, options?: RequestInit) {
    console.log('@@',import.meta.env.VITE_API_URL);
    const token = localStorage.getItem('token');
    return fetch(`https://mu-bff-10300237159.europe-west9.run.app/api/${url}`, {
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