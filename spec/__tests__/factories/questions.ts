import { Factory } from 'fishery';
import {
  CoverQuestion,
  OpenQuestion,
  SelectQuestion,
  QuestionOption,
  QuestionImages,
  FilterValueQuestion,
} from '@constructor-io/constructorio-client-javascript';
import { QuestionTypes } from '../../../src/components/CioQuiz/actions';

export const images = Factory.define<QuestionImages>(() => ({
  primary_alt: 'Primary Alt',
  primary_url: 'Primary URL',
  secondary_alt: 'Secondary Alt',
  secondary_url: 'Secondary URL',
}));

export const selectOption = Factory.define<QuestionOption>(({ sequence }) => ({
  attribute: null,
  id: sequence,
  value: 'VALUE',
}));

export const coverQuestion = Factory.define<CoverQuestion>(() => ({
  title: 'Title',
  description: 'Description',
  cta_text: 'CTA Text',
  id: 1,
  type: QuestionTypes.Cover,
  images: null,
  is_skippable: false,
}));

export const openQuestion = Factory.define<OpenQuestion>(() => ({
  title: 'Title',
  description: 'Description',
  cta_text: 'CTA Text',
  id: 1,
  type: QuestionTypes.OpenText,
  images: null,
  is_skippable: false,
}));

export const selectQuestion = Factory.define<SelectQuestion>(() => ({
  title: 'Title',
  description: 'Description',
  cta_text: 'CTA Text',
  id: 1,
  type: QuestionTypes.SingleSelect,
  options: selectOption.buildList(2),
  images: null,
  is_skippable: false,
}));

export const filterValueQuestion = Factory.define<FilterValueQuestion>(() => ({
  title: 'Title',
  description: 'Description',
  cta_text: 'CTA Text',
  id: 1,
  type: QuestionTypes.SingleFilterValue,
  filter_name: 'filter_name',
  options: selectOption.buildList(2),
  images: null,
  is_skippable: false,
}));
