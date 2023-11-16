import * as React from 'react';
import StoryVariations from './StoryVariations';

export interface IStoryPreviewProps {
  Component: (props: any) => JSX.Element;
}

export default function StoryPreview(props: IStoryPreviewProps) {
  const { Component } = props;
  return (
    <div className='story-preview'>
      <h1 className='story-title'>Primary</h1>
      <div className='box'>
        <div className='cio-quiz'>
          <Component />
        </div>
      </div>
      <StoryVariations Component={Component} />
    </div>
  );
}
