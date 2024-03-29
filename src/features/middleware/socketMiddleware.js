export const socketMiddleware = (wsUrl, wsActions) => {
  return (store) => {
    let socket = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsInitWithCustomUrl,
        onOpen,
        onClose,
        onError,
        onMessage,
        wsClose,
      } = wsActions;

      if (type === wsInit) {
        socket = new WebSocket(wsUrl);
      }

      if (type === wsInitWithCustomUrl) {
        socket = new WebSocket(payload);
      }

      if (socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen });
        };

        socket.onerror = () => {
          dispatch({ type: onError });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({
            type: onMessage,
            payload: restParsedData,
          });
        };

        socket.onclose = () => {
          dispatch({ type: onClose });
        };

        if (type === wsClose) {
          socket.close();
        }
      }

      next(action);
    };
  };
};
