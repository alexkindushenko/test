import React, { Component } from 'react';
import axios from 'axios';

import './answer-page.css';
class AnswerPage extends Component {
  state = {
    formData: null,
  };

  componentDidMount() {
    axios
      .get('http://localhost:3004/api/formData')
      .then(data => this.setState({ formData: data }));
  }

  render() {
    const { formData } = this.state;
    if (formData) {
      const data = formData.data[formData.data.length - 1];
      const {
        textInputVal,
        textInputTwoVal,
        selectInputVal,
        radioInputVal,
        checkInputVal,
      } = data;

      let clsText, clsTextTwo, clsSelect, clsRadio, clsCheck;

      clsText = textInputVal.toLowerCase().includes('рузвельт')
        ? 'corect'
        : 'mistake';
      clsTextTwo = textInputTwoVal.toLowerCase().includes('черчил')
        ? 'corect'
        : 'mistake';

      clsSelect = selectInputVal === '1914' ? 'corect' : 'mistake';
      clsRadio = radioInputVal === '1918' ? 'corect' : 'mistake';
      clsCheck =
        checkInputVal.length === 2 &&
        Number(checkInputVal[0]) + Number(checkInputVal[1]) === 3884
          ? 'corect'
          : 'mistake';

      return (
        <div className="">
          <h1 className="display-4 head-answer text-center">
            Проверка ответов
          </h1>
          <div className={`input-wraper ${clsText}`}>
            <p>Кто был президентом США в 1933-1945 годах?</p>
            <p>
              Ваш ответ <span className="text-muted">{textInputVal}</span>
            </p>
          </div>
          <div className={`input-wraper ${clsTextTwo}`}>
            <p>Кто был премьер-министром Великобритании 1940-1945 годах?</p>
            <p>
              Ваш ответ <span className="text-muted">{textInputTwoVal}</span>
            </p>
          </div>
          <div className={`input-wraper ${clsSelect}`}>
            <p>В каком году началась 1 мировая война?</p>
            <p>
              Ваш ответ <span className="text-muted">{selectInputVal}</span>
            </p>
          </div>
          <div className={`input-wraper ${clsRadio}`}>
            <p>В каком году закончилась 1 мировая война?</p>
            <p>
              Ваш ответ <span className="text-muted">{radioInputVal}</span>
            </p>
          </div>
          <div className={`input-wraper ${clsCheck}`}>
            <p>Начало и конец второй мировой войны?</p>
            <p>
              Ваш ответ
              <span className="text-muted">
                -{checkInputVal[0]}-{checkInputVal[1]}-{checkInputVal[2]}
              </span>
            </p>
          </div>
        </div>
      );
    }
    return <h1>ANSVER PAGE</h1>;
  }
}

export default AnswerPage;
