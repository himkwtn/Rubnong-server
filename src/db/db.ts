import mongoose from 'mongoose'

export const intializeDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI)
}
