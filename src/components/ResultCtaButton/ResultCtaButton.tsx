import './resultCtaButton.css';

interface ResultCtaButtonProps {
  items: any;
  className?: string;
  callback?: (items: string[]) => any;
}

export default function ResultCtaButton(props: ResultCtaButtonProps) {
  const { items, callback, className } = props;

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (callback && typeof callback === 'function') {
      callback(items);
    }
  };

  return (
    <button type='button' className={`cio-result-card-cta-btn ${className}`} onClick={clickHandler}>
      Add To Cart
    </button>
  );
}