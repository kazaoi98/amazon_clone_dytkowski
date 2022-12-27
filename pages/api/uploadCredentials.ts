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

    let { credentials } = req.body;
    req.body[credentials.id] = req.body['credentials'];
    delete req.body['credentials'];
    

    const newCredentials = {
        ...credentials,
        created_at: Date.now(),
    } 

    await redis.hset('credentials',  req.body  );

    res.status(200).json({ credentials: newCredentials })
}