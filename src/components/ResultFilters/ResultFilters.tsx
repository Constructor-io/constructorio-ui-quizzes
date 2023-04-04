import React from 'react';
import {
  FilterExpression,
  FilterExpressionGroupOr,
  FilterExpressionGroupAnd,
  FilterExpressionValue,
} from '@constructor-io/constructorio-client-javascript/lib/types';

interface ResultFiltersProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  filters?: any;
}

function ResultFilters(props: ResultFiltersProps) {
  const { filters } = props;

  const isValueExpression = (exp: FilterExpression): exp is FilterExpressionValue =>
    'name' in exp && 'value' in exp;
  const isAndFilter = (exp: FilterExpression): exp is FilterExpressionGroupAnd => 'and' in exp;
  const isOrFilter = (exp: FilterExpression): exp is FilterExpressionGroupOr => 'or' in exp;

  const getFilterValuesFromExpression = (exp: FilterExpression | null): string[] => {
    if (!exp) {
      return [];
    }
    if (isAndFilter(exp)) {
      return exp.and.flatMap((innerExpression: FilterExpression) =>
        getFilterValuesFromExpression(innerExpression)
      );
    }
    if (isOrFilter(exp)) {
      return exp.or.flatMap((innerExpression: FilterExpression) =>
        getFilterValuesFromExpression(innerExpression)
      );
    }
    if (isValueExpression(exp)) {
      return [exp.value];
    }

    return [];
  };
  const filterValues = [...new Set(getFilterValuesFromExpression(filters))];

  return (
    <div className='cio-results-filter-container'>
      <p>Because you answered</p>
      <div className='cio-results-filter-options'>
        {filterValues?.map((filter) => (
          <div className='cio-results-filter-option' key={filter}>
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultFilters;
