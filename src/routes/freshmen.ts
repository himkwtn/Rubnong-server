import { Router } from "express";
import { Freshmen } from '../model/freshmen.model';
import { requireslogin } from "../middlewares/authentication";
export const router = Router()

router.post('/login', async (req, res) => {
    const { first_name, last_name } = req.body
    const result = await Freshmen.findOne(req.body)
    let id
    if (!result) {
        await Freshmen.create(req.body)
        const result = await Freshmen.findOne(req.body)
        id = result._id
    } else {
        id = result._id
    }
    req.session.freshmenId = await id
    console.log(id)
    res.json({ first_name, last_name })
})

router.get('/profile', requireslogin, async (req, res) => {
    try {
        const freshies = await Freshmen.findById(req.session.freshmenId)
        if (freshies) {
            return res.json(freshies)
        }
        res.send('user not found')
    } catch (err) {
        res.status(400).send('error')
    }

})


