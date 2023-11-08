import { useQuery } from "@tanstack/react-query";
import { useS3Client } from "./client";

/**
 * Returns a list of buckets
 * @returns
 * @docs https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listBuckets-property
 */
export function useListBucketsQuery() {
  const s3 = useS3Client();
  return useQuery({
    queryKey: ["s3", "list-buckets"],
    async queryFn({ signal }) {
      const request = s3.listBuckets();
      signal.addEventListener("abort", () => {
        request.abort();
      });
      return request.promise();
    },
  });
}
