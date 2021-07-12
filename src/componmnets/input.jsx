import React from 'react';
import Summary from "./summary";
import '../assets/styles/input.css'

let randomNumber = [];
let moneyValue = 0;
let counter1 = 1;
let flag = true;


class Input extends React.Component {
    
    constructor() {
        super();
        this.state = {
            number: [],
            grandTotal: 0,
            counterForNumbers: 1,
            button1: false,
            button2: false,
            button3: false,
            button4: false,
            button5: false,
            button6: false,
            button7: false,
            button8: false,
            button9: false,
            button10: false,
            button11: false,
            button12: false,
            button13: false,
            button14: false,
            button15: false,
            button16: false,
            button17: false,
            button18: false,
            button19: false,
            button20: false
        }
    }
    
    
    handleClick = (e) => {
        // use const not let for the value and lable
        const value = e.target.getAttribute('value');
        
        const label = e.target.getAttribute('id');
        // you should add '' for case even thought it is the integer
        
        switch (true) {
            case value === 'Clear':
                this.setState({number: []});
                this.setState({grandTotal: 0});
                this.setState({counterForNumbers: 1});
                this.setState({button1: false});
                this.setState({button2: false});
                this.setState({button3: false});
                this.setState({button4: false});
                this.setState({button5: false});
                this.setState({button6: false});
                this.setState({button7: false});
                this.setState({button8: false});
                this.setState({button9: false});
                this.setState({button10: false});
                this.setState({button11: false});
                this.setState({button12: false});
                this.setState({button13: false});
                this.setState({button14: false});
                this.setState({button15: false});
                this.setState({button16: false});
                this.setState({button17: false});
                this.setState({button18: false});
                this.setState({button19: false});
                this.setState({button20: false});
                moneyValue = 0;
                counter1 = 1;
                randomNumber = [];
                flag = true;
                
                break;
            case value === 'Random':
                if (this.state.counterForNumbers > 5) {
                    alert("you can only enter 5 numbers")
                    flag = false;
                }
                
                this.setState({counterForNumbers: 6});
                
                //have to use this in the front when want to invoke the function in react
                if (flag) {
                    this.getRandomNumber();
                    this.setState({number: this.state.number.concat(...randomNumber)});
                }
                
                break;
            
            
            case value === 'cash':
                
                let flag3 = false;
                if (((this.state.counterForNumbers) === 6) && (this.state.grandTotal !== null)) {
                    flag3 = true
                }
                
                if (flag3=true) {
                    let intNumber = parseInt(value);
                    this.grandTotalAddition(intNumber);
                    this.setState({grandTotal: moneyValue});
                    alert(`The numbers you selected are: \n
                ${this.state.number}\n
               Grand Total: $ ${this.state.grandTotal}
               `);
                
                } else {
                    alert("you should enter money values before you can check out  ")
                }
                break;
            case '1' && (label === 'money'):
            case '5' && (label === 'money'):
            case '10' && (label === 'money'):
            case '20' && (label === 'money'):
                
                
                let flag2 = false;
                if (this.state.counterForNumbers === 6) {
                    flag2 = true
                }
                
                if (flag2) {
                    let intNumber = parseInt(value);
                    this.grandTotalAddition(intNumber);
                    this.setState({grandTotal: moneyValue});
                    
                } else {
                    alert("you should enter 5 numbers before you can enter the money value ")
                }
                
                break;
            
            default:
                let numberRecord = value;
                // let testN = this.state.counterForNumbers
                
                if (this.state.counterForNumbers > 5) {
                    if (!(this.state.number.includes(numberRecord))) {
                        alert("you can only enter 5 numbers")
                        flag = true;
                        if (label !== (this.state.number.includes(numberRecord))) {
                            numberRecord = 0
                        }
                    }
                    // let testN = this.state.counterForNumbers
                }
                
                
                switch (numberRecord) {
                    case '1':
                        if (!this.state.button1 && (flag === true)) {
                            this.setState({button1: !this.state.button1});
                            
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({button1: !this.state.button1});
                            
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                            
                        }
                        break;
                    
                    case '2':
                        if (!this.state.button2 && (flag === true)) {
                            this.setState({button2: !this.state.button2});
                            
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({button2: !this.state.button2});
                            
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '3':
                        
                        if (!this.state.button3 && (flag === true)) {
                            this.setState({
                                button3: !this.state.button3
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                            
                        } else {
                            this.setState({
                                button3: !this.state.button3
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                            
                        }
                        break;
                    case '4':
                        
                        if (!this.state.button4 && (flag === true)) {
                            this.setState({
                                button4: !this.state.button4
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                            
                        } else {
                            this.setState({
                                button4: !this.state.button4
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                            
                        }
                        break;
                    case '5':
                        
                        if (!this.state.button5 && (flag === true)) {
                            this.setState({
                                button5: !this.state.button5
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                            
                        } else {
                            this.setState({
                                button5: !this.state.button5
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                            
                        }
                        break;
                    case '6':
                        
                        if (!this.state.button6 && (flag === true)) {
                            this.setState({button6: !this.state.button6});
                            
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                            
                        } else {
                            this.setState({button6: !this.state.button6});
                            
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                            
                        }
                        break;
                    case '7':
                        
                        if (!this.state.button7 && (flag === true)) {
                            this.setState({
                                button7: !this.state.button7
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button7: !this.state.button7
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '8':
                        
                        if (!this.state.button8 && (flag === true)) {
                            this.setState({
                                button8: !this.state.button8
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button8: !this.state.button8
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '9':
                        
                        if (!this.state.button9 && (flag === true)) {
                            this.setState({
                                button9: !this.state.button9
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button9: !this.state.button9
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '10':
                        
                        if (!this.state.button10 && (flag === true)) {
                            this.setState({
                                button10: !this.state.button10
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button10: !this.state.button10
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '11':
                        
                        if (!this.state.button11 && (flag === true)) {
                            this.setState({
                                button11: !this.state.button11
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button11: !this.state.button11
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '12':
                        
                        if (!this.state.button12 && (flag === true)) {
                            this.setState({
                                button12: !this.state.button12
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button12: !this.state.button12
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '13':
                        
                        if (!this.state.button13 && (flag === true)) {
                            this.setState({
                                button13: !this.state.button13
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button13: !this.state.button13
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '14':
                        
                        if (!this.state.button14 && (flag === true)) {
                            this.setState({
                                button14: !this.state.button14
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button14: !this.state.button14
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '15':
                        
                        if (!this.state.button15 && (flag === true)) {
                            this.setState({
                                button15: !this.state.button15
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button15: !this.state.button15
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '16':
                        
                        if (!this.state.button16 && (flag === true)) {
                            this.setState({
                                button16: !this.state.button16
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button16: !this.state.button16
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '17':
                        
                        if (!this.state.button17 && (flag === true)) {
                            this.setState({
                                button17: !this.state.button17
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button17: !this.state.button17
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '18':
                        
                        if (!this.state.button18 && (flag === true)) {
                            this.setState({
                                button18: !this.state.button18
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button18: !this.state.button18
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '19':
                        
                        if (!this.state.button19 && (flag === true)) {
                            this.setState({
                                button19: !this.state.button19
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button19: !this.state.button19
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case '20':
                        
                        if (!this.state.button20 && (flag === true)) {
                            this.setState({
                                button20: !this.state.button20
                            })
                            this.setState({number: this.state.number.concat(value)});
                            this.setState({counterForNumbers: this.state.counterForNumbers + 1});
                        } else {
                            this.setState({
                                button20: !this.state.button20
                            })
                            this.handleDeletion(numberRecord);
                            this.setState({counterForNumbers: this.state.counterForNumbers - 1});
                        }
                        break;
                    case'0':
                        alert("you can only enter 5 numbers")
                        break;
                    
                }
                break;
            //        use contact for set state for an array
            // do not forget to add break, otherwise it will carry the value to the next condition
        }
        
        
    }
    
    getRandomNumber() {
        for (let i = 0; i < 5; i++) {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min);
                //The maximum is exclusive, and the minimum is inclusive
            }
            
            randomNumber.push(getRandomInt(1, 20));
        }
        console.log(randomNumber.toString());
        
        
    }
    
    grandTotalAddition(intNumber) {
        moneyValue = moneyValue + intNumber;
    }
    
    handleDeletion(numberRecord) {
        this.setState({
            number: this.state.number.filter((n) => {
                return n !== numberRecord
            })
        })
        
    }
    
    
    render() {
        return (
            <div className={"position"}>
                <div className="lottery">
                    <div className="lottery-keys">
                        <button className={this.state.button1 ? "buttonFalse" : "buttonTrue"}
                                type="button"
                                value={1}
                                id={1}
                                onClick={this.handleClick}>
                            1
                        </button>
                        <button className={this.state.button2 ? "buttonFalse" : "buttonTrue"} type="button" value={2}
                                id={2} onClick={this.handleClick}>2
                        </button>
                        <button className={this.state.button3 ? "buttonFalse" : "buttonTrue"} type="button" value={3}
                                id={3} onClick={this.handleClick}>3
                        </button>
                        <button className={this.state.button4 ? "buttonFalse" : "buttonTrue"} type="button" value={4}
                                id={4} onClick={this.handleClick}>4
                        </button>
                        <button className={this.state.button5 ? "buttonFalse" : "buttonTrue"} type="button" value={5}
                                id={5} onClick={this.handleClick}>5
                        </button>
                        <button className={this.state.button6 ? "buttonFalse" : "buttonTrue"} type="button" value={6}
                                id={6} onClick={this.handleClick}>6
                        </button>
                        <button className={this.state.button7 ? "buttonFalse" : "buttonTrue"} type="button"
                                value={7} id={7}
                                onClick={this.handleClick}>7
                        </button>
                        <button className={this.state.button8 ? "buttonFalse" : "buttonTrue"} type="button" value={8}
                                id={8} onClick={this.handleClick}>8
                        </button>
                        <button className={this.state.button9 ? "buttonFalse" : "buttonTrue"} type="button" value={9}
                                id={9} onClick={this.handleClick}>9
                        </button>
                        <button className={this.state.button10 ? "buttonFalse" : "buttonTrue"} type="button" value={10}
                                id={10} onClick={this.handleClick}>10
                        </button>
                        <button className={this.state.button11 ? "buttonFalse" : "buttonTrue"} type="button" value={11}
                                id={11} onClick={this.handleClick}>11
                        </button>
                        <button className={this.state.button12 ? "buttonFalse" : "buttonTrue"} type="button" value={12}
                                id={12} onClick={this.handleClick}>12
                        </button>
                        <button className={this.state.button13 ? "buttonFalse" : "buttonTrue"} type="button" value={13}
                                id={13} onClick={this.handleClick}>13
                        </button>
                        <button className={this.state.button14 ? "buttonFalse" : "buttonTrue"} type="button" value={14}
                                id={14} onClick={this.handleClick}>14
                        </button>
                        <button className={this.state.button15 ? "buttonFalse" : "buttonTrue"} type="button" value={15}
                                id={15} onClick={this.handleClick}>15
                        </button>
                        <button className={this.state.button16 ? "buttonFalse" : "buttonTrue"} type="button" value={16}
                                id={16} onClick={this.handleClick}>16
                        </button>
                        <button className={this.state.button17 ? "buttonFalse" : "buttonTrue"} type="button" value={17}
                                id={17} onClick={this.handleClick}>17
                        </button>
                        <button className={this.state.button18 ? "buttonFalse" : "buttonTrue"} type="button" value={18}
                                id={18} onClick={this.handleClick}>18
                        </button>
                        <button className={this.state.button19 ? "buttonFalse" : "buttonTrue"} type="button" value={19}
                                id={19} onClick={this.handleClick}>19
                        </button>
                        <button className={this.state.button20 ? "buttonFalse" : "buttonTrue"} type="button" value={20}
                                id={20} onClick={this.handleClick}>20
                        </button>
                        <button type="button"
                                className="all-clear" value="Clear"
                                onClick={this.handleClick}>Clear
                        </button>
                        <button type="button" className="all-clear" value="Random"
                                onClick={this.handleClick}>Random
                        </button>
                        <button type="button" className="equal-sign" value="cash"
                                onClick={this.handleClick}>Cash
                        </button>
                    </div>
                </div>
                
                
                <div className={"dollarPosition"}>
                    <div className={"header"}>
                        <div className="lottery">
                            <div className="lottery-keys">
                                <button type="button" value={'1'} id={'money'} onClick={this.handleClick}>$ 1</button>
                                <button type="button" value={'5'} id={'money'} onClick={this.handleClick}>$ 5</button>
                                <button type="button" value={'10'} id={'money'} onClick={this.handleClick}>$ 10</button>
                                <button type="button" value={'20'} id={'money'} onClick={this.handleClick}>$ 20</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={"summary"}>
                    <Summary number={(this.state.number)} totalAmount={(moneyValue)}/>
                </div>
            
            </div>
        
        )
    }
    
    
}

export default Input;