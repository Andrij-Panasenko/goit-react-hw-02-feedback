import { Component } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  updateBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const precentage = (good / total) * 100;

    return Number(precentage.toFixed(0));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const precentagePositiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section
          title="Please leave feedback"
          good="good"
          neutral="neutral"
          bad="bad"
          updateGood={this.updateGood}
          updateBad={this.updateBad}
          updateNeutral={this.updateNeutral}
        />
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            precentage={precentagePositiveFeedback}
            total={totalFeedback}
            value={this.state}
            title={'Statistics'}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
