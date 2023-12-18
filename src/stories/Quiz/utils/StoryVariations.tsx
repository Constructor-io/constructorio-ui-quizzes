/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import StoryBox from './StoryBox';
import StoryBoxWrapper from './StoryBoxWrapper';

export interface IStoryVariationsProps {
  Component: (props: any) => JSX.Element;
}

export default function StoryVariations(props: IStoryVariationsProps) {
  const { Component } = props;
  return (
    <>
      <h1 className='story-title'>Variations 🌈</h1>
      <div className='story-variations'>
        <StoryBoxWrapper title='Small Mobile 📱'>
          <StoryBox key='small-mobile' size='small-mobile'>
            <div className='cio-quiz'>
              <Component />
            </div>
          </StoryBox>
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Mobile 📱'>
          <StoryBox key='mobile' size='mobile'>
            <div className='cio-quiz'>
              <Component />
            </div>
          </StoryBox>
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Small Tablet 📔'>
          <StoryBox key='small-tablet' size='small-tablet'>
            <div className='cio-quiz'>
              <Component />
            </div>
          </StoryBox>
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Big Tablet 📔'>
          <StoryBox key='big-tablet' size='big-tablet'>
            <div className='cio-quiz'>
              <Component />
            </div>
          </StoryBox>
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Desktop 🖥️'>
          <StoryBox key='desktop' size='desktop'>
            <div className='cio-quiz'>
              <Component />
            </div>
          </StoryBox>
        </StoryBoxWrapper>
      </div>
    </>
  );
}
