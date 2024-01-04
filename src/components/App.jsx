import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / totalFeedback) * 100) || 0;
  };

  const buttons = Object.keys({ good, neutral, bad });
  const totalFeedback = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions handelFeedback={handelFeedback} buttons={buttons} />
      </Section>
      <Section title="Statistic">
        {totalFeedback !== 0 ? (
          <Statistics
            // title="Statistic"
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;

// import { Component, useState } from 'react';
// import css from './App.module.css';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Statistics from './Statistics/Statistics';
// import Section from './Section/Section';
// import Notification from './Notification/Notification';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handelFeedback = state => {
//     this.setState(prevState => ({
//       [state]: prevState[state] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return Math.round((good / total) * 100) || 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const buttons = Object.keys(this.state);
//     const totalFeedback = this.countTotalFeedback();
//     const percent = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={css.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             handelFeedback={this.handelFeedback}
//             buttons={buttons}
//           />
//         </Section>
//         <Section title="Statistic">
//           {totalFeedback !== 0 ? (
//             <Statistics
//               // title="Statistic"
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={percent}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
// export default App;
