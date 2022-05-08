/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJsonApiArray } from '../../api';
import { setCurrenciesActionCreator, setFromActionCreator, setToActionCreator } from '../../store/actions';
import { getCurrenciesSelector, getFromSlector, getToSelector } from '../../store/selectors';
import { Search } from '../search';
import './exchange.scss';

export const Exchange = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(getCurrenciesSelector);
  const selectedFrom = useSelector(getFromSlector);
  const selectedTo = useSelector(getToSelector);
  const [amount, setAmount] = useState('');
  const [convertAmount, setConvertAmount] = useState(0);
  const [displayExchange, setDisplayExchange] = useState(false);
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { value, name } = event.target;

    setDisplayExchange(false);

    // console.log(name, value); // eslint-disable-line no-console

    switch (name) {
      case 'selectedFrom':
        dispatch(setFromActionCreator(value));
        break;

      case 'selectedTo':
        dispatch(setToActionCreator(value));
        break;

      case 'amount':
        setAmount(value);
        break;

      default:
        break;
    }
  };

  const invertCurrencies = () => {
    const from = selectedFrom;
    const oldAmount = amount;

    dispatch(setFromActionCreator(selectedTo));
    dispatch(setToActionCreator(from));
    setAmount(convertAmount.toString());
    setConvertAmount(+oldAmount);
  };

  const convertRes = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setDisplayExchange(true);
    if (isNaN(+amount)) {
      console.log('amount', amount.replace(/\D/g, ''));
      console.log('selectedFrom', amount.replace(/\d/g, '').trim().slice(0,3).toUpperCase());
      console.log('selectedTo', amount.replace(/\d/g, '').trim().slice(-3).toUpperCase());
      const newFrom = amount.replace(/\d/g, '').trim().slice(0,3).toUpperCase();
      const newTo = amount.replace(/\d/g, '').trim().slice(-3).toUpperCase();
      setAmount(amount.replace(/\D/g, ''));
      dispatch(setFromActionCreator(currencies.find(x => x[0] === newFrom)!.join(' ')));
      dispatch(setToActionCreator(currencies.find(x => x[0] === newTo)!.join(' ')));
    }
    console.log(amount, selectedFrom.slice(0,3), selectedTo.slice(0,3));
    // const getExchange: Result = await getExchangeRates(amount, selectedFrom, selectedTo);
    // console.log(getExchange.result.toFixed(2));
    // const result = getExchange.result.toFixed(2);
    return setConvertAmount(32);
    // setConvertAmount(+result);
  };

  useEffect(() => {
    // getJsonApiArray()
    //   .then((curr) => dispatch(setCurrenciesActionCreator(curr)));
    dispatch(setCurrenciesActionCreator(getJsonApiArray));
  }, []);

  return (
    <form className="convertor">
      <h1 className="convertor__title">Currency Convertor</h1>
      <div className="convertor__conteiner mb-3">
        <label htmlFor="amount" className="form-label">
          Enter Ammount
        </label>
        <input
          className="convertor__input"
          type="text"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="convertor__selectors">
        <Search
          type="from"
        />
        <button
          className="convertor__invert btn btn-primary w-25"
          type="button"
          onClick={invertCurrencies}
        >
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </button>
        <Search
          type="to"
        />
      </div>
      <div className="mb-3">
        <button
          type="button"
          onClick={(e) => convertRes(e)}
          className="btn btn-primary w-100"
        >
          Convert
        </button>
      </div>
      <h4 className="convertor__p">{displayExchange && `${amount} ${selectedFrom.slice(0,3)} = ${convertAmount} ${selectedTo.slice(0,3)}`}</h4>
    </form>
  );
};
