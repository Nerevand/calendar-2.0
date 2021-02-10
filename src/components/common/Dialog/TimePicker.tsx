import React from 'react';
import NativeSelect, { NativeSelectProps } from '@material-ui/core/NativeSelect';
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import FormControl from 'components/ui/FormControl';
import Typography from 'components/ui/Typography';

export interface NativeSelectsProps extends NativeSelectProps {
  title: string
  data: string[]
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
  const { data, handleChange, value, title } = props;

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Typography color="textSecondary" >{t(title)}</Typography>
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
            data.map((i: string, index: number) => (
              <option key={`${i}-${index}`} value={i}>{i}</option>
            ))
          }
        </NativeSelect>
      </FormControl>
    </div>
  );
}
