import * as React from 'react';

export interface IStoryBoxProps {
  children: any;
  size?: string;
}

export default function StoryBox(props: IStoryBoxProps) {
  const { size, children } = props;
  const className = size ? `box box-${size}` : 'box';
  return <div className={className}>{children}</div>;
}
