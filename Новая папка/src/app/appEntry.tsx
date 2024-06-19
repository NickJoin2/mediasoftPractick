import createRoot from 'react-dom'
import BaseLayout from '@/app/layouts/BaseLayout'
import React from 'react';
import '@/app/style.scss'
import {Provider} from "react-redux";
import {store} from "@/app/appStore";
import {AuthProvider} from "@/app/hoc/AuthProvider";

createRoot.render(
    <Provider store={store}>
        <AuthProvider>
            <BaseLayout/>
        </AuthProvider>
    </Provider>,
    document.getElementById('root'))


