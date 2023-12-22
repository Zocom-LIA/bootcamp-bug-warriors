import './style.scss';

type SkeletonLoaderProps = {
  type: string;
  active: boolean;
};

export const SkeletonLoader = ({ type, active }: SkeletonLoaderProps) => {
  return (
    <>
      {active && (
        <div className='skeleton-loader'>
          <div className={`${type}`} />
        </div>
      )}
    </>
  );
};
