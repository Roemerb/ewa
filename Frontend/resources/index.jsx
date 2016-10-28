import React from 'react'

import { render } from 'react-dom'

import App  from './src/App'

const root = document.getElementById('root')

if (__DEV__) {
    const RedBox = require('redbox-react')
    try {
        render(<App />, root)
    } catch (e) {
        console.error(e)
        render(<RedBox error={e} />, root)
    }
} else {
    render(<App />, root)
}