"use server"
import { config } from "@/utils/config";
import { cookies } from "next/headers";

export const Singin = async (payload: string) => {

    const cookieStore = await cookies();

    const response = await fetch(config.serverBaseApi + '/auth/admin/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: payload,
    });

    if (!response.ok) {
        //error messsage
        const errorData = await response.json().catch(() => null);

        // This will activate the closest `error.js` Error Boundary
        throw new Error(errorData?.message || "Something went wrong, try again");
    }
    const res = await response.json();

    const newAccessToken = res?.data?.accessToken;
    const newRefreshToken = res?.data?.refreshToken;

    // Save new access token cookie
    cookieStore.set('accessToken', newAccessToken, {
        httpOnly: false,
        maxAge: 1 * 24 * 60 * 60, //1 day
        path: '/',
        sameSite: 'lax',
        secure: config.hasSSL,
    });

    cookieStore.set('refreshToken', newRefreshToken, {
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60, //7 days
        path: '/',
        sameSite: 'lax',
        secure: config.hasSSL,
    });

    return res;
};