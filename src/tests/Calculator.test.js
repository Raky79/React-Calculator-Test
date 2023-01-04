import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    const addOperator = container.getByTestId('operator-add');
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(addOperator);
    fireEvent.click(button4);
    fireEvent.click(equalsOperator);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    const subtractOperator = container.getByTestId('operator-subtract');
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(subtractOperator);
    fireEvent.click(button4);
    fireEvent.click(equalsOperator);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const runningTotal = container.getByTestId('running-total');
    const multiplyOperator = container.getByTestId('operator-multiply');
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(multiplyOperator);
    fireEvent.click(button5);
    fireEvent.click(equalsOperator);
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    const divideOperator = container.getByTestId('operator-divide');
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideOperator);
    fireEvent.click(button7);
    fireEvent.click(equalsOperator);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should concatenate multiple number button clicks', () => {
    const button1 = container.getByTestId('number1');
    const button6 = container.getByTestId('number6');
    const button7 = container.getByTestId('number7');
    const button9 = container.getByTestId('number9');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(button6);
    fireEvent.click(button7);
    fireEvent.click(button9);
    expect(runningTotal.textContent).toEqual('1679')
  })

  it('should chain multiple operations together', () => {
    const button6 = container.getByTestId('number6');
    const button5 = container.getByTestId('number5');
    const button2 = container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');
    const multiplyOperator = container.getByTestId('operator-multiply');
    const subtractOperator = container.getByTestId('operator-subtract');
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(button6);
    fireEvent.click(multiplyOperator);
    fireEvent.click(button5);
    fireEvent.click(subtractOperator);
    fireEvent.click(button2);
    fireEvent.click(equalsOperator);
    expect(runningTotal.textContent).toEqual('28')
  })

  it('should clear the running total without affecting the calculation', () => {
    const clear = container.getByTestId('clear');
    fireEvent.click(clear);
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const addOperator = container.getByTestId('operator-add');
    const equalsOperator = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    // const clear = container.getByTestId('clear');
    fireEvent.click(button1);
    fireEvent.click(addOperator);
    fireEvent.click(button4);
    fireEvent.click(equalsOperator);
    // fireEvent.click(clear);
    expect(runningTotal.textContent).toEqual('5')

  })


})

