const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }

// using try catch...

// const asyncHandler = () => {}
// const asyncHandler = (func) => {() => {}} 
//     or
// const asyncHandler = (func) => () => {} 
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fun) => async (req, res, next) => {
//     try {
//         await fun(req, res, next)
//     } catch (error) {
//         res.Status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }