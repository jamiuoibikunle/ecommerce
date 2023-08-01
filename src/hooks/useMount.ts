"use client"
import React, { useEffect, useState } from 'react'

const useMount = () => {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    if (window) setMount(true)
  }, [])

  return mount
}

export default useMount