// module.exports = {
//     ensureAuthenticated: function(req,res,next) {
//         if(req.isAuthenticated()) {
//             return next();
//         }
//         req.flash('errer_msg','please login to view this resource');
//         res.redirect('/users/login');
//     }
// }