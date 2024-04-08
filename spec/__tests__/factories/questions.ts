import { Factory } from 'fishery';
import {
  CoverQuestion,
  OpenQuestion,
  SelectQuestion,
  QuestionOption,
  QuestionImages,
} from '@constructor-io/constructorio-client-javascript';

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
  type: 'cover',
  images: null,
}));

export const openQuestion = Factory.define<OpenQuestion>(() => ({
  title: 'Title',
  description: 'Description',
  cta_text: 'CTA Text',
  id: 1,
  type: 'open',
  images: null,
}));

export const selectQuestion = Factory.define<SelectQuestion>(() => ({
  title: 'Title',
  description: 'Description',
  cta_text: 'CTA Text',
  id: 1,
  type: 'single',
  options: selectOption.buildList(2),
  images: null,
}));
