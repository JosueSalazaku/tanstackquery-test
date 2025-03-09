import { useQuery } from "@tanstack/react-query"
import { getAlluserData } from "../api/users"


const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn:  getAlluserData,
    })
}