import { useContext } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from 'components/ui/Button'
import Select from 'components/ui/Select'
import Typography from 'components/ui/Typography'
import { Languages, periods, MONTHS_CON } from "invariants";
import Context from 'Context'

import './styles.scss'

type Headerprops = {
  handlePrev: () => void
  handleNext: () => void
  titlePrev: string
  titleNext: string
}

function Header(props: Headerprops) {
  const {
    activeLang,
    selectedMonth,
    selectedYear,
    setLanguage,
    handleToday,
  } = useContext(Context)
  const {
    handlePrev,
    handleNext,
    titlePrev,
    titleNext
  } = props
  const history = useHistory()
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <header className="header">
      <Button
        variant="outlined"
        size="small"
        style={{ marginRight: "20px" }}
        onClick={handleToday}>
        {t("today")}
      </Button>

      <ButtonGroup variant="outlined" size="small"
        style={{ marginRight: "20px" }}
        aria-label="outlined primary button group">
        <Button
          onClick={handlePrev} size="small" title={titlePrev}>{'<'}</Button>
        <Button
          onClick={handleNext} size="small" title={titleNext}> {'>'}</Button>
      </ButtonGroup>

      <Typography>{t(`month.${MONTHS_CON[selectedMonth]}`)}{` - ${selectedYear}`}</Typography>

      <div className="language-wrapper" style={{ marginLeft: "20px" }}>
        <ButtonGroup variant="outlined" size="small" aria-label="outlined primary button group">
          {Languages.map((i) => {
            const activeLanguage: boolean = activeLang === i
            return (
              <Button
                key={i}
                variant={activeLanguage ? "contained" : 'outlined'}
                color={activeLanguage ? "primary" : 'default'}
                onClick={() => setLanguage(i)}
              >
                {i}
              </Button>
            );
          })}
        </ButtonGroup>

      </div>

      <Select
        data={periods}
        value={pathname.replace('/', '')}
        handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => history.push(`/${e.target.value}`)}
      />
    </header>
  );
}

export default Header;
