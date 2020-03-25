import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import createFilter from 'redux-persist-transform-filter';
import { persistStore } from "redux-persist";
import rootReducer from "./reducers";
import rootSaga from "./saga";


const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  let store;

  const isClient = typeof window !== "undefined";

  if (isClient) {
    // eslint-disable-next-line global-require
    const { persistReducer } = require("redux-persist");
    // eslint-disable-next-line global-require
    const storage = require("redux-persist/lib/storage").default;
    const persistConfig = {
      key: "root",
      storage,
      whitelist: ["cart"]
    };
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      bindMiddleware([sagaMiddleware])
    );
    // eslint-disable-next-line no-underscore-dangle
    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      initialState,
      bindMiddleware([sagaMiddleware])
    );
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
