import {v4 as uuid} from 'uuid'
import { Credentials } from '../../../typings';

const id = uuid();

const credentials: Credentials = {
    id,
    created_at: Date.now(),
    profilePicture: '',
    login: 'login',
    password: 'password',
}

export const uploadCredentialsToDatabase = async () => {
    const response = await fetch('api/uploadCredentials', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credentials })
    });

    const data = await response.json()

    console.log('data: ', data)
}