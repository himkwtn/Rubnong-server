'use strict'

import express from 'express'
const router = express.Router()
import { router as sophomoreRouer } from './sophomore'
/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' })
})
router.use('/sophomore', sophomoreRouer)


export default router
