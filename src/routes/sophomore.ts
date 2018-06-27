import { Router } from "express";
import { Sophomore } from '../model/sophomore.model';
import { requireslogin } from '../middlewares/authentication'
import { Freshmen } from "../model/freshmen.model";
export const router = Router()

router.get('/random', requireslogin, async (req, res) => {
    const count = await Sophomore.count({ taken: false })
    const random = Math.floor(Math.random() * count)
    const result = await Sophomore.findOne({ taken: false }).skip(random)
    const check = await Freshmen.findById(req.session.freshmenId)
    if (check.number) {
        return res.status(401).json({ message: 'already got p rahas' })
    }
    if (result) {
        await Sophomore.updateOne({ _id: result._id }, { taken: true })
        const freshies = await Freshmen.findByIdAndUpdate({ _id: req.session.freshmenId }, { number: result.number })
        console.log(freshies)
        return res.status(200).send(result.number)
    } else {
        res.send('mod laew ja')
    }
})
router.get('/list', async (req, res) => {
    const result = await Sophomore.find()
    res.send(result)
})
router.get('/reset', async (req, res) => {
    await Sophomore.updateMany({ taken: { $not: { $eq: false } } }, { taken: false })
    await Freshmen.updateMany({}, { $unset: { number: 1 } })
    res.send()
})