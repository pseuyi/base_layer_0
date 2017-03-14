import React from 'react'

import Buttons from './Buttons'
import ChapterA from './ChapterA'
import ChapterB from './ChapterB'
import ChapterC from './ChapterC'

const Content = ()=>(
  <div className="content container-fluid">
    <Buttons />
    <ChapterA />
    <ChapterB />
    <ChapterC />
  </div>
)

export default Content
