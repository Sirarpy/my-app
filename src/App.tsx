import React , {Suspense} from 'react';
import {MainLayout} from "./Components/mainLayout";


const App: React.FC = () => {
    return (
        <>
            <Suspense fallback={<h1>Loading profile...</h1>} >
                <MainLayout/>
            </Suspense>

        </>

    );
}

export default App;
