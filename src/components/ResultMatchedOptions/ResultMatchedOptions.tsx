import React from 'react';
import Popover from '../Popover/Popover';

interface ResultMatchedOptionsProps {
  matchedOptions: string[];
  selectedOptionsWithAttributes: string[];
}

function TickSVG() {
  return (
    <svg
      width='11'
      height='8'
      viewBox='0 0 11 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='inherit'>
      <path
        d='M8.39434 0.796799C8.78486 0.406275 9.41803 0.406275 9.80855 0.796799C10.1991 1.18732 10.1991 1.82049 9.80855 2.21101L4.49801 7.52155C4.10749 7.91207 3.47432 7.91207 3.0838 7.52155L0.5 4.81015C0.109476 4.41963 0.109476 3.78646 0.5 3.39594C0.890524 3.00541 1.52369 3.00541 1.91421 3.39594L3.79091 5.40023L8.39434 0.796799Z'
        fill='currentColor'
      />
    </svg>
  );
}

function CloseSVG() {
  return (
    <svg
      width='9'
      height='9'
      viewBox='0 0 9 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='inherit'>
      <path
        d='M0.292893 0.796799C-0.0976311 1.18732 -0.0976311 1.82049 0.292893 2.21101L2.76777 4.68589L0.292893 7.16076C-0.0976305 7.55128 -0.0976305 8.18445 0.292893 8.57497C0.683418 8.9655 1.31658 8.9655 1.70711 8.57497L4.18198 6.1001L6.65685 8.57497C7.04738 8.9655 7.68054 8.9655 8.07107 8.57497C8.46159 8.18445 8.46159 7.55128 8.07107 7.16076L5.59619 4.68589L8.07107 2.21101C8.46159 1.82049 8.46159 1.18732 8.07107 0.796799C7.68054 0.406275 7.04738 0.406275 6.65685 0.796799L4.18198 3.27167L1.70711 0.796799C1.31658 0.406275 0.683418 0.406275 0.292893 0.796799Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default function ResultMatchedOptions(props: ResultMatchedOptionsProps) {
  const { matchedOptions, selectedOptionsWithAttributes } = props;
  return (
    <div className='results-matched-options-container'>
      <Popover
        popoverTrigger={
          <p className='results-matched-option-overview'>
            {matchedOptions.length} relevant matches
          </p>
        }>
        <div className='results-matched-options-container'>
          {selectedOptionsWithAttributes.map((option) => (
            <div key={option} className='results-matched-options' title={option}>
              <p>{option}</p>
              <div>{matchedOptions.includes(option) ? <TickSVG /> : <CloseSVG />}</div>
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
}
