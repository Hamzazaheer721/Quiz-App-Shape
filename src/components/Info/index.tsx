import { Tooltip } from "antd";
import { FC, memo } from "react";
import { Circle } from "styles";

interface IInfoProps {
  title: string;
}

export const Info: FC<IInfoProps> = memo(({ title }) => (
  <Tooltip title={title}>
    <Circle disableHover icon>
      i
    </Circle>
  </Tooltip>
));
