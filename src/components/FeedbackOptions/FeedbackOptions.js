import { Button, BtnWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <BtnWrapper>
        {options.map((option, idx) => (
          <Button type="button" key={idx} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        ))}
      </BtnWrapper>
    </>
  );
};
