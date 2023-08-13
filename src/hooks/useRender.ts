"use client";

import React, { useEffect, useState } from 'react'

const useRender = () => {
  const [render, setRender] = useState<string | null>(null)

  const handleRender = () => {
    const width = window.innerWidth;

    if (width < 600) return setRender("mobile")
    if (width > 600 && width < 960) return setRender("tablet")
    if (width > 960) return setRender("desktop")
  }

  useEffect(() => {
    handleRender()
  }, [])

  window?.addEventListener("resize", handleRender)

  return [render]
}

export default useRender