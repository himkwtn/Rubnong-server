import { Document, model, Schema } from 'mongoose'

export interface ISophomore extends Document {
    number: string
    student_id: string
    name: string
    nickname: string
    mobilephone: string
    taken: any
}

const SophomoreSchema = new Schema({
    number: String,
    student_id: String,
    name: String,
    nickname: String,
    mobilephone: String,
    taken: Schema.Types.Mixed
})

export const Sophomore = model<ISophomore>('sophomore', SophomoreSchema)