import { Factory } from 'fishery';
import {
  BrowseResultData,
  QuizResultDataPartial,
  QuizResultsConfig,
  QuizResultsResponse,
  ResultCardOptions,
  ResultsPageOptions,
} from '../../../src/types';

export const quizResult = Factory.define<QuizResultDataPartial>(({ sequence }) => ({
  matched_terms: [],
  data: {
    id: `id-${sequence}`,
    image_url: 'https://example.com/image.jpg',
    rating_count: 2_123,
    rating_score: 4,
    regular_price: 100,
    sale_price: 80,
  },
  is_slotted: false,
  labels: [],
  value: 'VALUE',
  variations: [],
}));

export const browseResult = Factory.define<BrowseResultData>(({ sequence }) => ({
  matched_terms: [],
  data: {
    id: `id-${sequence}`,
    image_url: 'https://example.com/image.jpg',
    rating_count: 2_123,
    rating_score: 4,
    regular_price: 100,
    sale_price: 80,
  },
  is_slotted: false,
  labels: [],
  value: 'VALUE',
  variations: [],
  variations_map: [],
}));

export const quizResults = Factory.define<QuizResultsResponse>(() => ({
  request: {
    fmt_options: {},
    num_results_per_page: 10,
    page: 1,
    section: 'section',
    sort_by: 'sort_by',
    sort_order: 'asc',
    features: {
      query_items: false,
      auto_generated_refined_query_rules: false,
      manual_searchandizing: false,
      personalization: false,
      filter_items: false,
    },
    feature_variants: {},
    collection_filter_expression: {
      value: 'VALUE',
      name: 'NAME',
    },
    term: 'TERM',
  },
  response: {
    result_sources: {
      query_items: false,
      auto_generated_refined_query_rules: false,
      manual_searchandizing: false,
      personalization: false,
      filter_items: false,
    },
    facets: [],
    groups: [],
    results: [quizResult.build()],
    sort_options: [],
    refined_content: [],
    total_num_results: 1,
    features: [],
  },
  result_id: 'result_id',
  quiz_version_id: 'quiz_version_id',
  quiz_session_id: 'quiz_session_id',
  quiz_id: 'quiz_id',
  quiz_selected_options: [],
}));

export const resultCardOptions = Factory.define<ResultCardOptions>(() => ({
  renderResultCardPriceDetails: jest.fn(),
  resultCardRatingCountKey: 'rating_count',
  resultCardRatingScoreKey: 'rating_score',
  resultCardRegularPriceKey: 'regular_price',
  resultCardSalePriceKey: 'sale_price',
  resultCardPosition: 0,
}));

export const resultsPageOptions = Factory.define<ResultsPageOptions>(() => ({
  favoriteItems: [],
  numResultsToDisplay: 10,
  requestConfigs: {},
  showShareResultsButton: true,
}));

export const quizResultResponseSummary = Factory.define<
  QuizResultsConfig['desktop']['response_summary']
>(() => ({
  is_active: true,
  text: 'Desktop response summary',
  items_separator: ', ',
  last_separator: ' and ',
}));

export const quizResultsConfig = Factory.define<QuizResultsConfig>(() => ({
  desktop: {
    description: {
      is_active: true,
      text: 'Desktop description',
    },
    title: {
      is_active: true,
      text: 'Desktop title',
    },
    response_summary: null,
  },
}));
