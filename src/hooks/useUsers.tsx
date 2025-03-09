import { useQuery } from "@tanstack/react-query"
import { getAlluserData } from "../api/users"


export const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn:  getAlluserData,
    })
}