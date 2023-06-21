import CioQuiz from './components/CioQuiz';

// Hook
export { default as useCioQuiz } from './hooks/useQuiz';

// Questions Components
export { default as QuizQuestions } from './components/QuizQuestions/index';
export { default as OpenTextQuestion } from './components/OpenTextTypeQuestion/OpenTextTypeQuestion';
export { default as CoverQuestion } from './components/CoverTypeQuestion/CoverTypeQuestion';
export { default as SelectQuestion } from './components/SelectTypeQuestion/SelectTypeQuestion';

// Results Components
export { default as Results } from './components/Results/Results';
export { default as ResultCard } from './components/ResultCard/ResultCard';
export { default as ResultContainer } from './components/ResultContainer/ResultContainer';
export { default as ResultFilters } from './components/ResultFilters/ResultFilters';
export { default as ResultHeroCard } from './components/ResultHeroCard/ResultHeroCard';

export * from './types';

export default CioQuiz;
