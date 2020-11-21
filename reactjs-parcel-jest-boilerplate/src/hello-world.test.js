import '@testing-library/jest-dom'
import React from 'react';
import {screen, render} from '@testing-library/react';
import HelloWorld from './hello-world'

test("test content", () => {
    const text = "Hello World,";
render(<HelloWorld msg={text}/>)
expect(screen.getByText(text)).toBeInTheDocument()
// screen.debug();
})