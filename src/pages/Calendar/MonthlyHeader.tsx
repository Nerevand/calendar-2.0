import { useContext } from "react";
import { useTranslation } from "react-i18next";

import Header from 'components/common/Header'

import Context from '../../Context'

function MonthlyHeader() {

  const {
    handlePrevMonth,
    handleNextMonth,
  } = useContext(Context)
  const { t } = useTranslation();

  return (
    <Header
      handlePrev={handlePrevMonth}
      handleNext={handleNextMonth}
      titlePrev={t(`titles.prevMonth`)}
      titleNext={t(`titles.nextMonth`)}
    />
  );
}

export default MonthlyHeader;
