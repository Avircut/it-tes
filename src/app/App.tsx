import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';

const App = () => {
  return (
    <Suspense fallback="">
      <div className={classNames('app')}>
        <div className="content-page">
          <AppRouter />
        </div>
      </div>
    </Suspense>

  );
};
export default App;
