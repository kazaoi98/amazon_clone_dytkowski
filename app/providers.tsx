'use client';

import { PropsWithChildren } from "react";
import ReduxProvider from "../redux/ReduxProvider";


export default function Providers({ children }: PropsWithChildren) {
    return (
        <ReduxProvider>{children}</ReduxProvider>
    );
};


