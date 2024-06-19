import createRoot from 'react-dom'
import BaseLayout from '@/app/layouts/BaseLayout'
import React from 'react';
import '@/app/style.scss'
import {Provider} from "react-redux";
import {store} from "@/app/appStore";


createRoot.render(
    <Provider store={store}>
        <BaseLayout/>
    </Provider>,
    document.getElementById('root'))


