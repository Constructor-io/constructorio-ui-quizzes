/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import StoryBox from './StoryBox';
import StoryBoxWrapper from './StoryBoxWrapper';

export interface IStoryVariationsProps {
  Component: (props: any) => JSX.Element;
  variationsArgsList: any[];
}

export default function StoryVariations(props: IStoryVariationsProps) {
  const { Component, variationsArgsList } = props;
  return (
    <>
      <h1 className='story-title'>Variations 🌈</h1>
      <div className='story-variations'>
        <StoryBoxWrapper title='Small Mobile 📱'>
          {variationsArgsList.map((args, i) => (
            <StoryBox key={`${i}-small-mobile`} size='small-mobile'>
              <div className='cio-quiz'>
                <Component {...args} />
              </div>
            </StoryBox>
          ))}
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Mobile 📱'>
          {variationsArgsList.map((args, i) => (
            <StoryBox key={`${i}-mobile`} size='mobile'>
              <div className='cio-quiz'>
                <Component {...args} />
              </div>
            </StoryBox>
          ))}
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Small Tablet 📔'>
          {variationsArgsList.map((args, i) => (
            <StoryBox key={`${i}-small-tablet`} size='small-tablet'>
              <div className='cio-quiz'>
                <Component {...args} />
              </div>
            </StoryBox>
          ))}
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Big Tablet 📔'>
          {variationsArgsList.map((args, i) => (
            <StoryBox key={`${i}-big-tablet`} size='big-tablet'>
              <div className='cio-quiz'>
                <Component {...args} />
              </div>
            </StoryBox>
          ))}
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Desktop 🖥️'>
          {variationsArgsList.map((args, i) => (
            <StoryBox key={`${i}-desktop`} size='desktop'>
              <div className='cio-quiz'>
                <Component {...args} />
              </div>
            </StoryBox>
          ))}
        </StoryBoxWrapper>
      </div>
    </>
  );
}
