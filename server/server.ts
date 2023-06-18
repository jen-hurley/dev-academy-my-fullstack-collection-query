import { join } from 'node:path'

import express from 'express'

import path from 'path'

import wishlistRoutes from './routes/wishlist'

const server = express()

server.use(express.json())

server.use(express.static(join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/wishlist', wishlistRoutes)
server.use('/api/*', (req, res) => {
  res.sendStatus(404)
})

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'))
  })
}

export default server
