import React, {useImperativeHandle, useState} from 'react';

type Props = {
    defaultValue: string;
}

export type ExposedMethods = {
    innerValue: string
}
export const MyComponent = React.forwardRef<ExposedMethods, Props>(({defaultValue}, ref) => {
    const [value, setValue] = useState(defaultValue);

    useImperativeHandle(ref, () => ({
        innerValue: value
    }))

    return <div>
        <span>Inner</span>
        <input type={'text'} value={value} onChange={event => setValue(event.target.value)}/>
        <span>{value}</span>
    </div>;
});
