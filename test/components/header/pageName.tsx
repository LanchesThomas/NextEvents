import React from 'react'

interface Props {
  pageName: string;
}

const PageName = (props: Props) => {
  return (
    <div className="text-4xl">
      <h1>{props.pageName}</h1>
    </div>
  )
}

export default PageName
