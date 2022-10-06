import { useCallback, useContext, useEffect, useRef } from "react";
import { populateData } from "context/actions/index";
import { QuizDispatchContext } from "context/quiz.context";
import mockData from "general/data.json";

export const useFetchAndDispatchQuizData = () => {
  const { current: data } = useRef(mockData);

  const dispatch = useContext(QuizDispatchContext);

  const storeDataInContext = useCallback((): void => {
    populateData(dispatch, data);
  }, [data, dispatch]);

  useEffect(() => {
    storeDataInContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
