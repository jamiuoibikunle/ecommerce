"use client";

import React, { useEffect, useState } from 'react'

const useMobile = (refWidth: number) => {
  const [width, setWidth] = useState<any>()

  useEffect(() => {
    const width = window.innerWidth;
    setWidth(width)
  }, [])

  return (width > refWidth) ? true : false
}

export default useMobile