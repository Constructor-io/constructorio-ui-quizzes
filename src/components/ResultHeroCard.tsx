import * as React from 'react';
import ResultCtaButton from './ResultCtaButton';


interface ResultHeroCardProps {
  heroItem: any;
  resultRequest: any;
}

// const flattenRequestFilters: any = (result: any, key: any) => {
//   return Object.keys(result).reduce((res: any, el: any) => {
//     if (el === key) {
//       if (typeof result[el] === 'string') {
//         return [...res, result[el]];
//       } else if (Array.isArray(result[el])) {
//         return [...res, ...result[el]];
//       }
//     }

//     if (typeof result[el] === 'object' && result[el] !== null) {
//       return [...res, ...flattenRequestFilters(result[el], key)]
//     }
//     return res;
//   }, [])
// }

export default function ResultHeroCard(props: ResultHeroCardProps) {
  const { heroItem } = props;

  return (
    <div className="cio-hero-card">
      <img src={heroItem?.data?.image_url} />
      <div className="cio-hero-card-contents">
        <div className="cio-hero-card-title">Especially Curated For You!</div>
        {/* <div className="cio-hero-card-facet-pills">{commonFacets.map((value: string) => <span className="cio-hero-card-facet-pill">{value}</span>)}</div> */}
        <h2 className="cio-hero-card-item-name">{heroItem?.value}</h2>
        <div className="cio-hero-card-item-price">${heroItem?.data?.price}</div>
        <p className="cio-hero-card-item-description"></p>
        <ResultCtaButton className="cio-hero-cta-btn" items={[heroItem]} />
      </div>
    </div>
  )
}
