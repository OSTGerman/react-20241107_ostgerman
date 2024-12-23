import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatusById } from "../request/requestSlice";

export const useRequest = (thunk, ...params) => {
  const [request, setRequest] = useState();
  const dispatch = useDispatch();

  const requestStatus = useSelector((state) =>
    selectRequestStatusById(state, request?.requestId)
  );

  useEffect(() => {
    const request = dispatch(thunk(...params));
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, thunk, ...params]);

  return requestStatus;
};
