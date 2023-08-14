import React from 'react';
import { Nullable } from '@constructor-io/constructorio-client-javascript/lib/types';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import { renderImages } from '../../utils';
import { QuestionImages } from '../../types';

export interface ICoverTypeQuestionProps {
  id: number;
  title: string;
  description: string;
  images?: Nullable<QuestionImages>;
}

export default function CoverTypeQuestion(props: ICoverTypeQuestionProps) {
  const { id, title, description, images } = props;

  const hasImage = images?.primary_url;

  return (
    <div
      className={`
        cio-container${hasImage ? '--with-image' : ''}
        cio-cover-question-container${hasImage ? '--with-image' : ''}
      `}
      data-question-key={id}>
      {hasImage ? renderImages(images, 'cio-question-image-container') : ''}
      <div className='cio-question-content'>
        <QuestionTitle title={title} />
        <QuestionDescription description={description} />
      </div>
    </div>
  );
}
