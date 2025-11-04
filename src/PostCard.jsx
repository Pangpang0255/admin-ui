import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "./Services";

function PostCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="border-2 border-gray-300 rounded-lg bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full aspect-square p-5 overflow-hidden">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#b83016]">
          Post Cards
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 max-w-80xl mx-auto"> 
          {users.map((user) => ( 
            <UserCard key={user.id || user.title} 
            title={user.title} 
            body={user.body} {...user} 
            /> 
            ))}
        </div>
      </div>
    </>
  );
}

export default PostCard;
