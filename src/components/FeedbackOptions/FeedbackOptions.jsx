import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ buttons, handelFeedback }) => {
  return (
    <div className={css.buttonsGroup}>
      {buttons.map(button => (
        <button
          key={button}
          type="button"
          className={css.button}
          onClick={() => handelFeedback(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
