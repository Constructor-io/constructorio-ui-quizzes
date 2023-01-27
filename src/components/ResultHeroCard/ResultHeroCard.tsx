import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import './resultHeroCard.css';

interface ResultHeroCardProps {
  heroItem: any;
  resultRequest: any; // eslint-disable-line
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
// Code used to flatten facets and extract the key. TBD if we are using it for facet pills

export default function ResultHeroCard(props: ResultHeroCardProps) {
  const { heroItem } = props;

  return (
    <div className='cio-hero-card'>
      <img className='cio-hero-card-image' src={heroItem?.data?.image_url} alt='product' />
      <div className='cio-hero-card-contents'>
        <div className='cio-hero-card-title'>Especially Curated For You!</div>
        {/*
        <div className='cio-hero-card-facet-pills'>
          {commonFacets.map((value: string) => (
            <span className='cio-hero-card-facet-pill'>{value}</span>
          ))}
        </div>
        */}
        <h2 className='cio-hero-card-item-name'>{heroItem?.value}</h2>
        <div className='cio-hero-card-item-price'>${heroItem?.data?.price}</div>
        <p className='cio-hero-card-item-description' />
        <ResultCtaButton className='cio-hero-cta-btn' items={[heroItem]} />
      </div>
    </div>
  );
}
