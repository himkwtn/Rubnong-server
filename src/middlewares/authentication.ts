export const requireslogin = (req, res, next) => {
    if (req.session && req.session.freshmenId) return next()
    else {
        res.status(401).json({ message: 'You must be logged in to view this page' })
    }
}

export const requiresAdmin = (req, res, next) => {

}