export const requireslogin = (req, res, next) => {
    if (req.session && req.session.userId) return next()
    else {
        res.status(401).json({ message: 'You must be logged in to view this page' })
    }
}