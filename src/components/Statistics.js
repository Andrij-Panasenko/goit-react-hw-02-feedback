import { Title } from "./Section.styled";
import { Value } from "./Statistics.styled";

export const Statistics = ({ title, value, total, precentage }) => {
   return (
     <>
       <Title>{title}</Title>
       <Value>Good: {value.good}</Value>
       <Value>Neutral: {value.neutral}</Value>
       <Value>Bad: {value.bad}</Value>
       {total ? <Value>Total: {total}</Value> : null}
       {precentage ? <Value>Precentage: {precentage}%</Value> : null}
     </>
   )
}