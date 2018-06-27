'use strict'

import express from 'express'
const router = express.Router()
import { router as sophomoreRouer } from './sophomore'
import { router as freshmenRouter } from './freshmen'
/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' })
})
router.use('/sophomore', sophomoreRouer)
router.use('/freshmen', freshmenRouter)

export default router
