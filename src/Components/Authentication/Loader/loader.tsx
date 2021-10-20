import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import * as SC from "../AuthenticationStyles";

import Box from '@mui/material/Box';

 const CircularIndeterminate:React.FC = ()=> {
    return (
        <Box sx={{ display: 'flex' }}>
            <SC.Loader>
                <CircularProgress />
            </SC.Loader>
        </Box>
    );
}

export default CircularIndeterminate;