import { FeedbackBtn } from "./Button.styled";

export const Button = ({title, onUpdate}) => {
   return (
      <FeedbackBtn onClick={onUpdate} type="button">{title}</FeedbackBtn>
   )
}