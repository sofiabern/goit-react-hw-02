import css from './Options.module.css'

function Options({onAdd, onReset, total}) {
  return (
    <div className={css['btn-wrapper']}>
      <button onClick={() => onAdd('good')}>Good</button>
      <button onClick={() => onAdd('neutral')}>Neutral</button>
      <button onClick={() => onAdd('bad')}>Bad</button>
      {!!total && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

export default Options