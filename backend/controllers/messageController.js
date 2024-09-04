export const sendMessage = async (req,res)=>{
    try {
        const senderId=req.id;
        const receiverId=req.params.id;
        const {message} = req.body;
        let gotConversation =  await Conversation.findOne({})
    } catch (error) {
        console.log(error);
        
    }
}