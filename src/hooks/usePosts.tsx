import { useQuery } from "@tanstack/react-query";
import { getAllpostsData } from "../api/posts";

export const usePosts = () => {
  return useQuery({
      queryKey: ["posts"],
      queryFn: getAllpostsData,
  });
};
