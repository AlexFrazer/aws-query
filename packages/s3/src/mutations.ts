import { useMutation } from "@tanstack/react-query";
import { useS3Client } from "./client";
import { type CreateBucketRequest } from "aws-sdk/clients/s3";

export function useCreateBucketMutation() {
  const s3 = useS3Client();
  return useMutation({
    mutationKey: ["s3", "create-bucket"],
    async mutationFn(vars: CreateBucketRequest) {
      return s3.createBucket(vars).promise();
    },
  });
}
