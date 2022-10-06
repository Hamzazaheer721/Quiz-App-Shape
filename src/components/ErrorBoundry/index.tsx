/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */

import { Result } from "antd";
import { IErrorBoundryProps, IErrorBoundryState } from "general";
import { Component, ErrorInfo } from "react";

export class ErrorBoundry extends Component<
  IErrorBoundryProps,
  IErrorBoundryState
> {
  constructor(props: IErrorBoundryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): IErrorBoundryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", { error, errorInfo });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) return children;

    return (
      <Result status="404" title="404" subTitle="Ops, Something went wrong" />
    );
  }
}
