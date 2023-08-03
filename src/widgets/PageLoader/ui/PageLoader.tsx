import { classNames } from 'shared/lib/classNames/classNames';
import { AppLoader } from 'shared/ui/AppLoader/AppLoader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <AppLoader />
  </div>
);
