import { useQuery } from "@tanstack/react-query";
import { getAllpostsData } from "../api/posts";

const usePosts = () => {
  return useQuery({
      queryKey: ["posts"],
      queryFn: getAllpostsData,
  });
};
