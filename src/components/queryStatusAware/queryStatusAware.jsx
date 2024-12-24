export const QueryStatusAware = ({ query, children }) => {
  const { isLoading, isFetching, isError } = query;

  if (isLoading || isFetching) {
    return <em>Loading...</em>;
  }

  if (isError) {
    return <em>Error!</em>;
  }

  return <>{children}</>;
};
