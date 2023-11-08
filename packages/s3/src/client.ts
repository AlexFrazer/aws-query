import { useAWSQueryContext } from "@aws-query/provider";
import S3, { ClientConfiguration } from "aws-sdk/clients/s3";
import { useMemo } from "react";

export function useS3Client(overrides: Partial<ClientConfiguration> = {}) {
  const context = useAWSQueryContext();
  return useMemo(() => {
    return new S3({
      ...context,
      ...overrides,
    });
  }, [context]);
}
