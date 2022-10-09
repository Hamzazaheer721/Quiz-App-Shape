/* eslint-disable implicit-arrow-linebreak */
import { notification } from "antd";
import { ERROR_MESSAGE } from "general";

export const useErrorToaster = () => {
  const showErrorMessage = (message = ERROR_MESSAGE) =>
    notification.error({ message });

  return { showErrorMessage };
};
