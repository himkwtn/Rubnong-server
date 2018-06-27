import { Document, model, Schema } from 'mongoose'

export interface IFreshmen extends Document {
    first_name: string
    last_name: string
    number?: string
}

const FreshmenSchema = new Schema({
    first_name: String,
    last_name: String,
    number: String
})

export const Freshmen = model<IFreshmen>('freshmen', FreshmenSchema)