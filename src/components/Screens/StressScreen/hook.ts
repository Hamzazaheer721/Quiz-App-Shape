/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AnswerPayload,
  ANSWER_KEYS,
  ENTER_KEY,
  QuizDispatchType,
  SHORT_DELAY,
  SKIPPED,
  SOS_ERROR_MESSAGE,
} from "general";
import { useErrorToaster, useProceed } from "hooks";
import { debounce } from "lodash";
import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";

export const useStressScreen = (quizDispatch: QuizDispatchType) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { setAnswer, nextScreen } = useProceed(quizDispatch);
  const { showErrorMessage } = useErrorToaster();

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const updateAnswersAndSteps = useCallback((value: string) => {
    const data: AnswerPayload = {
      name: ANSWER_KEYS.SOURCE_OF_STRESS,
      value,
    };
    setAnswer(data);
    nextScreen();
  }, []);

  const validateResult = useCallback(() => {
    let flag = true;
    if (!inputRef.current) return;
    if (!(inputRef.current.value.length <= 250)) {
      showErrorMessage(SOS_ERROR_MESSAGE);
      flag = false;
    }
    if (!flag) return;
    updateAnswersAndSteps(inputRef.current.value);
  }, []);

  const keyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = e;
    if (key === ENTER_KEY) validateResult();
  };

  const handleKeyPress = debounce(keyDownHandler, SHORT_DELAY);

  const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    validateResult();
  }, []);

  const handleSkip = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateAnswersAndSteps(SKIPPED);
  }, []);

  return { handleKeyPress, inputRef, handleClick, handleSkip };
};
