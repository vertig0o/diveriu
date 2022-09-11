import React from 'react'

import { ExampleComponent, Button } from 'diveriu'
import 'diveriu/dist/index.css'

const App = () => {
  return (

    <div style={{textAlign:'center'}  }>
      <ExampleComponent text='Merhaba' />
      <Button type="Primary" text='Primary Butoon' />
      <br></br>
      <Button type="dotted" text='Dashed Butoon' />
      <br></br>
      <Button type="text" text='Text Butoon' />
      <br></br>
      
    </div>
  )}

export default App
