import type { UserApiResponse } from './types';

// повертає типізований об'єкт UserApiResponse
export async function fetchUser(userId: number): Promise<UserApiResponse> {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
    }
    const data = (await res.json()) as UserApiResponse;
    return data;
}
