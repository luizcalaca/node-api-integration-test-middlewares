const checkPermissions = (req, res, next) => {
    if(!req.headers.authorization) return res.status(401).json({message: "Unauthorized user"})
    next()
}

module.exports = checkPermissions