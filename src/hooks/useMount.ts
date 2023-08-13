"use client"
import React, { useEffect, useState } from 'react'

const useMount = () => {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    window && setTimeout(() => {
      setMount(true)
    }, 2000);

  }, [])

  return [mount]
}

export default useMount