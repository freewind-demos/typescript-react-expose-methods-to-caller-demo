import React, {FC, useRef, useState} from 'react';
import {ExposedMethods, MyComponent} from './MyComponent';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const ref = useRef<ExposedMethods | null>(null)

    const [html, setHtml] = useState<string>()

    function getInnerValue() {
        setHtml(ref.current?.innerValue ?? '')
    }

    return <div>
        <MyComponent ref={ref} defaultValue={'react'}/>
        <button onClick={() => getInnerValue()}>Get Inner Value</button>
        <hr/>
        {html}
    </div>;
}
