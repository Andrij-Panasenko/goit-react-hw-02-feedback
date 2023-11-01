import { Component } from "react";
import { Button } from "./Button";
import { BtnWrapper } from "./FeedbackForm.styled";
import { Title } from "./FeedbackForm.styled";
import { Statistics } from "./Statistics";

export class FeedbackForm extends Component {
   state = {
      good: 0,
      neutral: 0,
      bad: 0
   };

   updateGood = () => {
      this.setState(prevState => {
         return {
            good: prevState.good + 1,
         }
      })
   }

   updateNeutral = () => {
      this.setState(prevState => {
         return {
            neutral: prevState.neutral + 1,
         }
      })
    }
   
   updateBad = () => {
      this.setState(prevState => {
         return {
            bad: prevState.bad + 1,
         }
      })
   }
   
   countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad; 
   }

   countPositiveFeedbackPercentage = () => {
      const { good } = this.state;
      const total = this.countTotalFeedback();
      const precentage = good / total * 100;

      return Number(precentage.toFixed(0))
   }

   render() {
      const totalFeedback = this.countTotalFeedback();
      const precentagePositiveFeedback = this.countPositiveFeedbackPercentage();
      return (
         <div>
            <Title>Please leave feedback</Title>
            <BtnWrapper>
               <Button 
                  onUpdate={this.updateGood} 
                  title={"good"} />
               <Button 
                  onUpdate={this.updateNeutral} 
                  title={"neutral"}/>
               <Button 
                  onUpdate={this.updateBad} 
                  title={"bad"}/>
            </BtnWrapper>
            <Statistics
               precentage={precentagePositiveFeedback}
               total={totalFeedback}
               value={this.state}
               title={"Statistics"}
            />
         </div>
      )
   }
}