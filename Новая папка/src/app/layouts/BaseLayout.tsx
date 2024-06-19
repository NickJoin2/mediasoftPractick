import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Layout} from '@/pages/layout'

// import {Glavnay} from "@/widgets/Glavnay";
// import {MapSite} from "@/pages/mapSite";
// import {CursachP} from "@/pages/cursachPrepod";
// import {DiplomP} from "@/pages/diplomPrepod";
import {CursachP} from "@/pages/cursachPrepod";
import {DiplomP} from "@/pages/diplomPrepod";
// import {CursachS} from "@/pages/cursachStudent";
import RequireAuth from "@/app/hoc/RequireAuth";
import {GlavnayControl} from "@/pages/glavnayControl";
// import {CursachS} from "@/pages/cursachStudent";
// import {DiplomS} from "@/pages/diplomStydent";
// import {GlavnayControl} from "@/pages/glavnayControl";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    {/*<Route path="/" element={<Glavnay/>}/>*/}

                    {/*<Route path='/' element={<MapSite/>}/>*/}
                    <Route path='/' element={<CursachP/>}/>

                    <Route element={<RequireAuth rolesToCheck={['admin', 'student']} />}>
                        <Route path='/diplom' element={<DiplomP />} />
                    </Route>

                    <Route element={<RequireAuth rolesToCheck={['student']} />}>
                        <Route path="/cursach" element={<GlavnayControl/>}/>
                    </Route>


                    {/*<Route path='/cursach' element={<CursachS />} />*/}
                    {/*<Route path='/' element={<DiplomS/>}/>*/}
                </Route>
            </Routes>
        </Router>
    )
}

export default App
