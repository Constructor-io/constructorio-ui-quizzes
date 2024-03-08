import { renderToString } from 'react-dom/server';
import React from 'react';

import QuizContext, { QuizContextValue } from '../components/CioQuiz/context';
import { defaultContextMocks } from './constants';

export function RenderHookServerSideWrapper({
  renderCallback,
  renderCallbackProps = { initialProps: {} },
  onRenderHookValue,
}: {
  renderCallback: (props: any) => ReturnType<typeof renderHookServerSide>['result'];
  renderCallbackProps: { initialProps: any };
  onRenderHookValue: (result: ReturnType<typeof renderHookServerSide>['result']) => void;
}) {
  const utils = renderCallback(renderCallbackProps.initialProps);
  onRenderHookValue(utils);
  return null;
}

export function renderHookServerSide(
  renderCallback: (props: any) => ReturnType<typeof renderHookServerSide>['result'],
  renderCallbackProps: { initialProps: any },
  onRenderHookValue = jest.fn()
) {
  return {
    view: renderToString(
      <RenderHookServerSideWrapper
        renderCallback={renderCallback}
        renderCallbackProps={renderCallbackProps}
        onRenderHookValue={onRenderHookValue}
      />
    ),
    onRenderHookValue,
    result: onRenderHookValue.mock.calls[0][0],
  };
}

export function renderHookServerSideWithQuizContext(
  renderCallback: (props: any) => ReturnType<typeof renderHookServerSide>['result'],
  contextMocks: Partial<QuizContextValue>,
  renderCallbackProps: { initialProps: any },
  onRenderHookValue = jest.fn()
) {
  return {
    view: renderToString(
      <QuizContext.Provider value={{ ...defaultContextMocks, ...contextMocks }}>
        <RenderHookServerSideWrapper
          renderCallback={renderCallback}
          renderCallbackProps={renderCallbackProps}
          onRenderHookValue={onRenderHookValue}
        />
        ,
      </QuizContext.Provider>
    ),
    onRenderHookValue,
    result: onRenderHookValue.mock.calls[0][0],
  };
}
