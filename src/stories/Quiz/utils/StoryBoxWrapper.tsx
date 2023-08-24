import * as React from 'react';
import StoryBox from './StoryBox';

export interface IStoryBoxWrapperProps {
  children: any;
  title: string;
}

export default function StoryBoxWrapper(props: IStoryBoxWrapperProps) {
  const { children, title } = props;
  return (
    <>
      <h3>{title}</h3>
      <div className='box-wrapper'>
        <StoryBox>{children}</StoryBox>
      </div>
    </>
  );
}
