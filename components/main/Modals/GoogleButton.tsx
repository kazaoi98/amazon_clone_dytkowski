import jwtDecode from 'jwt-decode'
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { setUserCredentials } from '../../../redux/loginSlice'

export default function GoogleButton() {

    const dispatch = useAppDispatch()
    const handleCallback = (response: any) => {
        var obj = jwtDecode(response.credential)
        dispatch(setUserCredentials(obj))
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '720719334843-7i4injm84b4ccc740te766796r0h5jm5.apps.googleusercontent.com',
            callback: handleCallback
        });

        google.accounts.id.renderButton(
            document.getElementById('google_button')!,
            {
                theme: "filled_blue",
                size: 'large',
                type: 'standard',
                width: '400',
                logo_alignment: "center",
            }
        );

    }, [])

    return (
        <div className=' mt-2  flex justify-center bg-[#1a73e8] rounded-lg'>
            <div id="google_button"></div>
        </div> 
      
    )
}