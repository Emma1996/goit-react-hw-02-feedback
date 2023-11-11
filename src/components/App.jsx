import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { NotificationMessage } from './NotificationMessage';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return (total ? (this.state.good / total) * 100 : 0).toFixed(0);
  };

  render() {
    const isFeedback = this.countTotalFeedback() > 0;
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Section title="Please Leave Feedback for Expresso Cafe">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>

        {isFeedback ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section title="">
            <NotificationMessage message="Nothing to see here, yet. No feedback was given." />
          </Section>
        )}
      </div>
    );
  }
}
export default App;
