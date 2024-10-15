import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>Домашнее задание «События и состояние»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>Портфолио с фильтрами</h3>
          </header>
          <div className={'task__body'}>
            <Portfolio />
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
