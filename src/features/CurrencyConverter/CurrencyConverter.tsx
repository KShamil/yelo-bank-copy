"use client";

import React, { FC, useState } from "react";
import { CurrencyConverterProps } from "./CurrencyConverter.props";
import styles from "./CurrencyConverter.module.css";
import Link from "next/link";
import ArrowIcon from "./blue_arr.svg";

type Currency = "AZN" | "USD" | "EUR";

type CurrencyRates = {
  [key in Currency]: number;
};

const currencyRates: CurrencyRates = {
  USD: 0.5874,
  EUR: 0.51,
  AZN: 1,
};

export const CurrencyConverter: FC<CurrencyConverterProps> = ({
  ...props
}): JSX.Element => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<Currency>("AZN");
  const [toCurrency, setToCurrency] = useState<Currency>("USD");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(event.target.value as Currency);
  };

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setToCurrency(event.target.value as Currency);
  };

  const convertCurrency = () => {
    const convertedAmount =
      amount * (currencyRates[toCurrency] / currencyRates[fromCurrency]);
    return convertedAmount.toFixed(2);
  };

  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.title}>
          <h3>Valyuta məzənnələri</h3>
          <span>Nağd</span>
        </div>
        <div className={styles.converter}>
          <div className={styles.sell}>
            <input
              type="number"
              placeholder="Satıram"
              value={amount}
              onChange={handleAmountChange}
            />
            <select value={fromCurrency} onChange={handleFromCurrencyChange}>
              {Object.keys(currencyRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.buy}>
            <input
              type="number"
              step="any"
              placeholder="Alıram"
              value={`${convertCurrency()}`}
            />
            <select value={toCurrency} onChange={handleToCurrencyChange}>
              {Object.keys(currencyRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Valyuta</th>
                <th>Alış</th>
                <th>Satış</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.currency}>USD</td>
                <td>1.6950</td>
                <td>1.7025</td>
              </tr>
              <tr>
                <td className={styles.currency}>EUR</td>
                <td>1.7500</td>
                <td>1.9600</td>
              </tr>
            </tbody>
          </table>
          <p></p>
        </div>
        <div className={styles.linkBody}>
          <Link href="" className={styles.link}>
            <span>Bütün məzənnələr</span>
            <ArrowIcon className={styles.icon}/>
          </Link>
        </div>
      </div>
    </>
  );
};
