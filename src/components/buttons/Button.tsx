import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

export default function Button(props: {
  className?: string;
  href?: string;
  imgUrl: string; 
  onClick?: MouseEventHandler;
  title?: string;
  children: ReactNode;
  textColor?: string; 
  borderColor?: string;
}) {
  return (
    <a
      className={clsx(
        'button flex justify-center items-center text-white shadow-lg shadow-red-900 text-lg sm:text-xl pointer-events-auto transition-all duration-300',
        'hover:scale-105 hover:shadow-red-700',
        'w-full', // 让按钮填充父容器，避免大小不均
        props.className,
      )}
      href={props.href}
      title={props.title}
      onClick={props.onClick}
    >
      <div
        className={clsx(
          'flex items-center justify-center bg-gray-900 rounded-xl px-4 py-2 border-2',
          props.borderColor ? `border-${props.borderColor}` : 'border-red-600',  // 使用传入的 borderColor，默认 red-600
          'w-full'
        )}
      >
      <span
          className={clsx(
            props.textColor ? `text-${props.textColor}` : 'text-red-400', // 使用传入的 textColor，默认 red-400
            'uppercase tracking-widest'
          )}
        >
          {props.children}
        </span>
      </div>
    </a>
  );
}
