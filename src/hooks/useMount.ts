"use client"
import React, { useEffect, useState } from 'react'

const useMount = () => {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (window) setMount(true)
    }, 2500);
  }, [])

  return [mount]
}

export default useMount