// @desc get pages
// @route GET /api/pages
// @access private
const getPages=(req, res)=>{
    res.status(200).json({message: 'Get pages'})
}

// @desc set pages
// @route POST /api/pages
// @access private
const setPages=(req, res)=>{
    if(!req.body.text){
        res.status(400).json({message: 'Page data not found'})
    }else{
        res.status(200).json({message: "Set Pages"})
    }
}

// @desc update pages
// @route PUT /api/pages
// @access private
const updatePages=(req, res)=>{
    res.status(200).json({message: `Update Pages ${req.params.pageId}`})
}

// @desc delete pages
// @route DELETE /api/pages
// @access private
const deletePages=(req, res)=>{
    res.status(200).json({message: `Delete Pages ${req.params.pageId}`})
}

module.exports={
    getPages,
    setPages,
    updatePages,
    deletePages
}