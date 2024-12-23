import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../data/request/requestStatus";

export const RequestStatusAware = ({ requestStatus, children }) => {
  if (requestStatus === REQUEST_STATUS_PENDING) {
    return <em>Loading...</em>;
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return <em>Error!</em>;
  }

  return <>{children}</>;
};
