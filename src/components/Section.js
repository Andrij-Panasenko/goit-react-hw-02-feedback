import { Button } from "./Button";
import { BtnWrapper, Title } from "./Section.styled";

export const Section = ({ title, good, bad, neutral, updateGood, updateBad, updateNeutral }) => {
   return (
   <>
      <Title>{title}</Title>
      <BtnWrapper>
            <Button name={ good} onUpdate={updateGood} />
            <Button name={ neutral} onUpdate={updateNeutral}/>
            <Button name={ bad} onUpdate={updateBad}/>
      </BtnWrapper>
   </>
   )
}
