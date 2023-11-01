import { FeedbackBtn } from "./Button.styled";

export const Button = ({name , onUpdate}) => {
   return (
      <>
         <FeedbackBtn onClick={onUpdate} type="button">{name}</FeedbackBtn>
      </>
   )
}
