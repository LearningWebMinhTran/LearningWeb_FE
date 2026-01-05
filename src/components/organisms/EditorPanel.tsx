import type { ReactNode } from "react";
import MaterialIcon from "../atoms/MaterialIcon";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type EditorPanelProps = {
  title: string;
  icon: string;
  iconClassName?: string;
  selectOptions: string[];
  toolbarGroups: string[][];
  content: ReactNode;
  footerLeft: string;
  footerRight: string;
};

const EditorPanel = ({
  title,
  icon,
  iconClassName = "",
  selectOptions,
  toolbarGroups,
  content,
  footerLeft,
  footerRight,
}: EditorPanelProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-lg flex items-center gap-2 text-text-main-light dark:text-text-main-dark">
        <MaterialIcon className={iconClassName} name={icon} variant="outlined" />
        {title}
      </h3>
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg shadow-sm flex flex-col h-full min-h-[600px]">
        <div className="border-b border-border-light dark:border-border-dark p-2 flex flex-wrap gap-1 items-center bg-gray-50 dark:bg-gray-800 rounded-t-lg">
          <Select defaultValue={selectOptions[0]}>
            <SelectTrigger className="w-32 h-8 text-xs mr-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {selectOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {toolbarGroups.map((group, groupIndex) => (
            <div key={`${title}-group-${groupIndex}`} className="flex items-center gap-1">
              <div className="h-4 w-px bg-border-light dark:border-border-dark mx-1"></div>
              {group.map((action) => (
                <Button
                  key={`${title}-${action}`}
                  className="h-8 w-8 text-text-muted-light dark:text-text-muted-dark"
                  size="icon"
                  variant="ghost">
                  <MaterialIcon className="text-lg" name={action} variant="outlined" />
                </Button>
              ))}
            </div>
          ))}
        </div>
        <div className="p-6 flex-1 outline-none prose dark:prose-invert max-w-none text-text-main-light dark:text-text-main-dark">
          {content}
        </div>
        <div className="px-4 py-2 border-t border-border-light dark:border-border-dark text-xs text-text-muted-light dark:text-text-muted-dark flex justify-between items-center bg-gray-50 dark:bg-gray-800 rounded-b-lg">
          <span>{footerLeft}</span>
          <span>{footerRight}</span>
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
