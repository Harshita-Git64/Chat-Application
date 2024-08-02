import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("http://localhost:5000/api/users", {
					method: "GET",
					headers: { "Content-Type": "application/json" },	
				    credentials: "include", 
				});
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				console.log("All Users",data)
				setUserList(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		getConversations();
	}, []);
	return { loading, userList };
};
export default useGetConversations;
