import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect, { NativeSelectProps } from '@material-ui/core/NativeSelect';
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Typography from 'components/ui/Typography';

type Periods = {
  value: string
  path: string
}
export interface NativeSelectsProps extends NativeSelectProps {
  data: Periods[]
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      margin: theme.spacing(1),
      minWidth: 120,
    },
    select: {
      marginLeft: theme.spacing(2),
    },
  }),
);

export default function NativeSelects(props: NativeSelectsProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, handleChange, value } = props;

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Typography color="textSecondary" >{t("period")}</Typography>
        <NativeSelect
          className={classes.select}
          value={value}
          onChange={handleChange}
          inputProps={{
            name: 'name',
            id: 'custom-dropdown',
          }}
        >
          {
            data.map((i: Periods) => (
              <option key={i.value} value={i.path}>{t(`select.${i.value}`)}</option>
            ))
          }
        </NativeSelect>
      </FormControl>
    </div>
  );
}
