import {v4 as uuid} from 'uuid'
import { Credentials } from '../../../typings';

const id = uuid();

const credentials: Credentials = {
    id,
    created_at: Date.now(),
    picture: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
    login: 'login',
    password: 'password',
}

export const uploadCredentialsToDatabase = async () => {
    const res = await fetch('api/uploadCredentials', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credentials })
    });

    const data = await res.json()
}