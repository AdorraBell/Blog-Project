import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLoader.module.scss';

interface AppLoaderProps {
    className?: string
}

export const AppLoader = ({className}: AppLoaderProps) => {

  return (
    <div className={classNames(cls.AppLoader, {}, [className])}>
      <div className={cls.Loader}></div>
    </div>
  );
}