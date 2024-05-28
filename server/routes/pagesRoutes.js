const express=require('express')
const router= express.Router()

const { getPages, setPages, updatePages, deletePages } = require('../controllers/pageController')

router.route('/').get(getPages).post(setPages)
router.route('/:pageId').put(updatePages).delete(deletePages)

module.exports=router