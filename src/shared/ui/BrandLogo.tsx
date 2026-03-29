import { Link } from 'react-router-dom';
import logo from '../../assets/brand/uzxcmg-logo.png';

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  withPlate?: boolean;
};

export const BrandLogo = ({
  className = '',
  imageClassName = 'h-9 w-auto',
  withPlate = false,
}: BrandLogoProps) => {
  const plateClassName = withPlate
    ? 'rounded-xl bg-white px-3 py-2 shadow-[0_18px_40px_rgba(3,12,22,0.3)]'
    : '';

  return (
    <Link to="/" aria-label="UzXCMG home" className={`inline-flex items-center ${className}`.trim()}>
      <span className={plateClassName}>
        <img src={logo} alt="UzXCMG" className={imageClassName} />
      </span>
    </Link>
  );
};
