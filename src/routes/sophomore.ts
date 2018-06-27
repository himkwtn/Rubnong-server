import { Router } from "express";
import { Sophomore } from '../model/sophomore.model';

export const router = Router()
router.get('/random', async (req, res) => {
    const count = await Sophomore.count({ taken: false })
    const random = Math.floor(Math.random() * count)
    const result = await Sophomore.findOne({ taken: false }).skip(random)
    if (result) {
        await Sophomore.updateOne({ _id: result._id }, { taken: true })
        console.log(result.number)
        res.send(result.number)
    } else {
        console.log('mod laew ja')
        res.send('mod laew ja')
    }
})
router.get('/list', async (req, res) => {
    const result = await Sophomore.find()
    res.send(result)
})
router.get('/reset', async (req, res) => {
    await Sophomore.updateMany({ taken: { $not: { $eq: false } } }, { taken: false })
    res.send()
})