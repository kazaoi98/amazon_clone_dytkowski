import type { NextApiRequest, NextApiResponse } from "next";
import { CONFIG_FILES } from "next/dist/shared/lib/constants";
import redis from "../../redis";
import { Credentials } from "../../typings";

type Data = {
    retrievedCredentials: Credentials[];
}

type Error = {
    body: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {

    if (req.method !== 'GET') {
        res.status(405).json({ body: 'Method Not Allowed' })
        return
    }

   const retrievedCredentials: Credentials[] = await redis.hvals('credentials')

    res.status(200).json({ retrievedCredentials })
}   