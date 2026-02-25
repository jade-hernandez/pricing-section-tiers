import IconCheckFill from "../icons/IconCkeck";
import { cn } from "../utils/utils";

export interface ICheckListItemProps {
  content: string;
  className?: string;
}

export const CheckListItem = ({ content, className }: ICheckListItemProps) => {
  return (
    <li className={cn("flex gap-3", className)}>
      <div className='flex shrink-0 items-center justify-center'>
        <IconCheckFill />
      </div>
      <span className='text-neutral-600'>{content}</span>
    </li>
  );
};

export interface ICheckListProps {
  items: string[];
}

export const CheckList = ({ items }: ICheckListProps) => {
  return (
    <ul className={cn("flex flex-col gap-5 md:min-h-45")}>
      {items.map((item, index) => (
        <CheckListItem
          key={index}
          content={item}
        />
      ))}
    </ul>
  );
};
