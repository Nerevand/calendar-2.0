import { useContext } from "react";
import { useTranslation } from "react-i18next";

import Header from 'components/common/Header'

import Context from '../../Context'

function WeeklyHeader() {

  const {
    handlePrevWeek,
    handleNextWeek,
  } = useContext(Context)
  const { t } = useTranslation();

  return (
    <Header
      handlePrev={handlePrevWeek}
      handleNext={handleNextWeek}
      titlePrev={t(`titles.prevWeek`)}
      titleNext={t(`titles.nextWeek`)}
    />
  );
}

export default WeeklyHeader;
