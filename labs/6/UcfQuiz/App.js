import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import questions from './questions.json';

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1

class QuizQuestion extends React.Component {
  render() {
    return<>
      <Text style={styles.welcome}>{this.props.question}</Text>
      {this.props.answers.map((v, i) =>
      <Button color="#B7A369" title={v.text} onPress={()=> this.props.nextQuestion(v.correct)} key={i}/>)}
    </>
  }
}

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      titleName: "Begin Quiz Now!",
      counter: 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT
  }
    nextQuestion(correct) {
      if(correct){
        this.setState({score: this.state.score + 1})
      }
      if(this.state.currentQuestion === questions.length - 1) {
        this.setState({currentState: TITLE_STATE})
      } else {
        clearInterval(this.timer)
        console.log(this.state.currentQuestion)
        this.setState({
          titleName:"Start Over?",
          currentState: QUESTION_STATE,
          currentQuestion: this.state.currentQuestion + 1
        })
      }
    }
    countdown() {
      console.log(this.state.counter)
      if(this.state.counter < this.timeLimit) {
        this.setState({
          titleName: 'Starting the Quiz!',
          counter: this.state.counter + 1
        })
      } else {
          this.setState({
            titleName: "Beginning Quiz!",
            currentState: QUESTION_STATE,
            counter: 0
          })
        if(this.state.currentState === TITLE_STATE) {
            this.timer = setInterval(() => this.countdown(), 1000)
            clearInterval(this.timer)
      } else {
          this.setState({titleName:"You answered!"})
        }
      }
    }
    start() {
      this.setState({titleName: "Starting the Quiz!", counter: 0})
      this.timer = setInterval(() => this.countdown(), 1000)
    }
    render() {
      return (
        <>
        <Text style={styles.timer}>{this.timeLimit - this.state.counter}</Text>
        {((this.state.currentState === TITLE_STATE) ?
        <>
        <Text style={styles.welcome}>{this.state.titleName}</Text>
        <Button title="start" onPress={()=>this.start()} />
        </>
        :
        <QuizQuestion answers={questions[this.state.currentQuestion].possibleAnswers} question=
        {questions[this.state.currentQuestion].question} nextQuestion={(correct) => this.nextQuestion(correct)}
        ></QuizQuestion>)}
        <Text style={styles.score}>Score: {this.state.score}</Text>
          </>)
    }
}
    class App extends React.Component {
      render(){
        return (
        <View style = {styles.container}>
        <Text style={styles.quiz}>UCF Quiz</Text>
        <HomePage></HomePage>
        </View>
        );
      }
    }

export default App;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center', 
        backgroundColor: "#000000", 
        justifyContent: 'center', 
      }, 
      quiz:{
        color: "#B7A369",
        fontFamily: "Arial",
        fontSize: "35px",
      },
      score:{
        color: "#B7A369",
        fontFamily: "Arial",
        fontSize: "35px",
      },
      timer:{
        color: "#B7A369",
        fontSize: "25px",
      },
      welcome:{
        color: "#B7A369",
        fontSize: "35px",
      },
      book:{
        fontSize: "15px",
        color: "#B7A369",
        margin: "70px",
        textAlign: 'center'
      }
    }); 
