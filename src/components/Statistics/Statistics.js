import { Value } from './Statistics.styled';

export const Statistics = ({
  options: { good, bad, neutral },
  totalFeedback,
  percentage,
}) => {
  const total = totalFeedback();
  const precentagePositiveFeedback = percentage();
  return (
    <>
      <Value>Good:{good} </Value>
      <Value>Neutral: {bad}</Value>
      <Value>Bad: {neutral}</Value>
      <Value>Total: {total}</Value>
      {precentagePositiveFeedback ? (
        <Value>Percentage: {precentagePositiveFeedback}</Value>
      ) : null}
    </>
  );
};
