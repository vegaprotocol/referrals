import { Tooltip, VegaIcon, VegaIconNames } from "@vegaprotocol/ui-toolkit";
import classNames from "classnames";
import { HTMLAttributes } from "react";

type TableColumnDefinition = {
  displayName?: string;
  name: string;
  tooltip?: string;
  className?: string;
};

type TableProps = {
  columns: TableColumnDefinition[];
  data: Record<TableColumnDefinition["name"] | "className", React.ReactNode>[];
  noHeader?: boolean;
};

const BORDER_COLOR = "border-vega-clight-500 dark:border-vega-cdark-500";
const INNER_BORDER_STYLE = `border-b ${BORDER_COLOR}`;
const GRADIENT =
  "bg-gradient-to-b from-vega-clight-800 dark:from-vega-cdark-800 to-transparent";

export const Table = ({
  columns,
  data,
  noHeader = false,
  className,
  ...props
}: TableProps & HTMLAttributes<HTMLTableElement>) => {
  const header = (
    <thead>
      <tr>
        {columns.map(({ displayName, name, tooltip }) => (
          <th
            key={name}
            col-id={name}
            className={classNames(
              "px-5 py-3 text-sm  text-vega-clight-100 dark:text-vega-cdark-100",
              INNER_BORDER_STYLE
            )}
          >
            <span className="flex flex-row gap-2 items-center">
              <span>{displayName}</span>
              {tooltip ? (
                <Tooltip description={tooltip}>
                  <button className="text-vega-clight-400 dark:text-vega-cdark-400 no-underline decoration-transparent w-[12px] h-[12px] inline-flex">
                    <VegaIcon size={12} name={VegaIconNames.INFO} />
                  </button>
                </Tooltip>
              ) : null}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
  return (
    <table
      className={classNames(
        "w-full",
        "border-separate border rounded-md border-spacing-0",
        BORDER_COLOR,
        GRADIENT,
        className
      )}
      {...props}
    >
      {!noHeader && header}
      <tbody>
        {data.map((d, i) => (
          <tr key={i} className={classNames(d["className"] as string)}>
            {columns.map(({ name, className }) => (
              <td
                className={classNames(
                  "px-5 py-3 text-base",
                  INNER_BORDER_STYLE,
                  {
                    "border-none": i === data.length - 1,
                  },
                  className
                )}
                key={`${i}-${name}`}
              >
                {d[name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
