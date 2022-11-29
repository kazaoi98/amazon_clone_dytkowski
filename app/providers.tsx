'use client';

import { PropsWithChildren } from "react";
import ReduxProvider from "../redux/ReduxProvider";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from "../redux/store";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <ReduxProvider><PersistGate persistor={persistor}>{children}</PersistGate></ReduxProvider>
    );
};


