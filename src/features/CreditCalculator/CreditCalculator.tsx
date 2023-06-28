"use client";

import React, { FC, useState } from "react";
import { CreditCalculatorProps } from "./CreditCalculator.props";
import styles from "./CreditCalculator.module.css";
import Link from "next/link";
import BlueArrowIcon from "./blue_arr.svg";
import { Button } from "@/shared/Button/Button";

export const CreditCalculator: FC<CreditCalculatorProps> = ({
  ...props
}): JSX.Element => {
  const [loanAmount, setLoanAmount] = useState<number>(300);
  const [loanTerm, setLoanTerm] = useState<number>(3);
  const [interestRate, setInterestRate] = useState<number>(12);

  const handleLoanAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoanAmount(parseInt(event.target.value));
  };

  const handleLoanTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoanTerm(parseInt(event.target.value));
  };

  const handleInterestRateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInterestRate(parseFloat(event.target.value));
  };

  const monthlyPayment = (): string => {
    const monthlyInterestRate = interestRate / 1200;
    const payment =
      (loanAmount * monthlyInterestRate) /
      (1 - 1 / Math.pow(1 + monthlyInterestRate, loanTerm));
    return payment.toFixed(2);
  };

  return (
    <>
      <div {...props} className={styles.wrapper}>
        <div className={styles.top}>
          <h3>Kredit kalkulyatoru</h3>
          <Link href="" className={styles.link}>
            <span>Daha ətraflı</span>
            <BlueArrowIcon className={styles.icon} />
          </Link>
        </div>
        <div className={styles.middle}>
          <div className={styles.calculator}>
            <div className={styles.cell}>
              <div className={styles.info}>
                <span>Məbləğ</span>
                <b>{loanAmount}</b>
              </div>
              <input
                type="range"
                placeholder="Mebleğ"
                id="loan-amount"
                min="300"
                max="50000"
                value={loanAmount}
                onChange={handleLoanAmountChange}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.info}>
                <span>Faiz</span>
                <b>{interestRate}</b>
              </div>
              <input
                type="range"
                placeholder="Faiz"
                id="interest-rate"
                min="12"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={handleInterestRateChange}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.info}>
                <span>Müddət</span>
                <b>{loanTerm}</b>
              </div>
              <input
                type="range"
                id="loan-term"
                min="3"
                max="59"
                value={loanTerm}
                onChange={handleLoanTermChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <span>Aylıq ödəniş</span>
            <b>{monthlyPayment()} <span className={styles.valute}>AZN</span></b>
          </div>
          <div className={styles.right}>
            <Button appearance="calc-btn">Kredit sifarişi</Button>
          </div>
        </div>
      </div>
    </>
  );
};
