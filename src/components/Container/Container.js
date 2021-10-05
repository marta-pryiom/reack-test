import s from './Container.module.css';
console.log(s);

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}
export default Container;
