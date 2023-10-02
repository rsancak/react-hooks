import React from 'react';
import ReactDOM from 'react-dom/client';
import UseState from './useState';
import UseEffectFn from './useEffect';
import UseRefFn from './useRef';
import UseReducerFn from './useReducer';
import UseCallbakFn from './useCallback';
import UseMemoFn from './useMemo';
import CustomHookFn from './CustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <UseState />
        <br /><br />
        <UseEffectFn />
        <br /><br />
        <UseRefFn/>
        <br /><br />
        <UseReducerFn/>
        <br /><br />
        <UseCallbakFn/>
        <br /><br />
        <UseMemoFn/>
        <br /><br />
        <CustomHookFn/>
    </>
);