import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";
import { Credentials } from "../../typings";

type Data = {
    credentials: Credentials;
}

type Error = {
    body: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {

    if (req.method !== 'POST') {
        res.status(405).json({ body: 'Method Not Allowed' })
        return
    }

    const { credentials } = req.body;
    
    const newCredentials = {
        ...credentials,
        created_at: Date.now()
    }

    await redis.hset('credentials', credentials.id, JSON.stringify(newCredentials));

    res.status(200).json({ credentials: newCredentials })
}