import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

export const sendMessage=async(req,res)=>{
    try{

        const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

        await conversation.save();
		 await newMessage.save();

		// this will run in parallel
		//await Promise.all([conversation.save(), newMessage.save()]);

        res.status(200).json(newMessage)

    }
    catch(error){
        res.status(500).json({error:"internal server error"})
        console.log("error on sending message",error.message)
    }
}

export const getMessage=async(req,res)=>{
	try{
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		}).populate("messages");//not reference but actual message info from messagemmodel.
        
		if (!conversation) {
		return res.status(200).json([])
		}
		const messages=conversation.messages;
		return res.status(200).json(messages)

	}
	catch(error){
        console.log("error on getting message",error.message)
		return res.status(500).json({error:"internal server error"})
	}
	
}