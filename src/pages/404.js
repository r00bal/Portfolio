import React, { useState, useCallback } from 'react'

import styled from 'styled-components/macro'
import { Layout } from '../layouts'

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <div style={{ height: '200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '150px' }}>404</h1>
        <p>page not found</p>
      </div>
    </Layout>
  )
}
