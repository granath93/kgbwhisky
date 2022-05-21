import Image from 'next/image';

const Logo = ({ height }) => {
  const width = height * 1.54;

  return <Image alt="" height={height} width={width} src="/logga-gul.svg" />;
};

export default Logo;
