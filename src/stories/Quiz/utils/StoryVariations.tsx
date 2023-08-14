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
          {variationsArgsList.map((args) => (
            <StoryBox size='small-mobile'>
              <div className='cio-quiz'>
                <Component {...args} />
              </div>
            </StoryBox>
          ))}
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Mobile 📱'>
          {variationsArgsList.map((args) => (
            <StoryBox size='mobile'>
              <div className='cio-quiz'>
                <Component {...args} />
              </div>
            </StoryBox>
          ))}
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Small Tablet 📔'>
          {variationsArgsList.map((args) => (
            <StoryBox size='small-tablet'>
              <div className='cio-quiz'>
                <Component {...args} />
              </div>
            </StoryBox>
          ))}
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Big Tablet 📔'>
          {variationsArgsList.map((args) => (
            <StoryBox size='big-tablet'>
              <div className='cio-quiz'>
                <Component {...args} />
              </div>
            </StoryBox>
          ))}
        </StoryBoxWrapper>

        <StoryBoxWrapper title='Desktop 🖥️'>
          {variationsArgsList.map((args) => (
            <StoryBox size='desktop'>
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
