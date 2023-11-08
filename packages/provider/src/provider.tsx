import invariant from "tiny-invariant";
import { ReactNode, createContext, useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ServiceConfigurationOptions } from "aws-sdk/lib/service";

interface AuthContextType extends ServiceConfigurationOptions {}

const AuthContext = createContext<AuthContextType>({});

interface AWSQueryProviderProps extends AuthContextType {
  queryClient?: QueryClient;
  children?: ReactNode;
}

export function useAWSQueryContext() {
  const context = useContext(AuthContext);
  return context;
}

export function AWSQueryProvider({
  children,
  queryClient = new QueryClient(),
  ...authProps
}: AWSQueryProviderProps) {
  return (
    <AuthContext.Provider value={authProps}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContext.Provider>
  );
}
