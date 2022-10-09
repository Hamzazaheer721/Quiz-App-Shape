/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable implicit-arrow-linebreak */
import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useRef,
  useState,
  useLayoutEffect,
  KeyboardEvent,
} from "react";
import {
  AnswerPayload,
  SHORT_DELAY,
  DOB_ERROR_MESSAGE,
  isValidDay,
  isValidMonth,
  isValidYear,
  normalizeDateStateForContext,
  QuizDispatchType,
  ENTER_KEY,
} from "general";
import { useProceed, useErrorToaster } from "hooks";
import { debounce } from "lodash";
import { initialDateState } from "./helper";

export const useDobScreen = (quizDispatch: QuizDispatchType) => {
  const [state, setState] = useState(initialDateState);
  const { day, month, year } = state;

  const dayRef = useRef<HTMLInputElement>(null);

  const { setAnswer, nextScreen } = useProceed(quizDispatch);

  const { showErrorMessage } = useErrorToaster();

  useLayoutEffect(() => {
    if (dayRef.current) {
      dayRef.current.focus(); /* Focus on Day Field after component mounts */
    }
  }, []);

  const dispatchValueToState = (name: string, value: string) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const handlerFunction = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatchValueToState(name, value);
    },
    [state],
  );

  const updateAnswersAndSteps = useCallback(() => {
    const data: AnswerPayload = normalizeDateStateForContext(state);
    setAnswer(data);
    nextScreen();
  }, [state]);

  const validateResult = useCallback(() => {
    let flag = true;
    if (!isValidDay(+day)) {
      showErrorMessage(DOB_ERROR_MESSAGE.INVALID_DAY);
      flag = false;
    }
    if (!isValidMonth(+month)) {
      showErrorMessage(DOB_ERROR_MESSAGE.INVALID_MONTH);
      flag = false;
    }
    if (!isValidYear(+year)) {
      showErrorMessage(DOB_ERROR_MESSAGE.INVALID_YEAR);
      flag = false;
    }
    if (!flag) return;
    updateAnswersAndSteps();
  }, [state]);

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === ENTER_KEY) validateResult();
  };

  const handleKeyDown = debounce(keyDownHandler, SHORT_DELAY);

  const handleChange = debounce(handlerFunction, SHORT_DELAY);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.stopPropagation();
      validateResult();
    },
    [state],
  );

  return {
    dayRef,
    state,
    handleChange,
    handleClick,
    handleKeyDown,
  };
};
