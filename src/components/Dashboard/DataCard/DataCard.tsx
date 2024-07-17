import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import scss from "./DataCard.module.scss";
import React from "react";
import { InfoOutlined } from "@mui/icons-material";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description } = props;
  return (
    <Paper className={scss.dataCard}>
      <div className={scss.header}>
        <Typography fontSize={"h6"} color={"lightslategray"}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography fontSize={16}>
              {`${description} which is ${value}`}
            </Typography>
          }
        >
          <IconButton>
            <InfoOutlined />
          </IconButton>
        </Tooltip>
      </div>
      <Typography fontSize={20}>{value}</Typography>
    </Paper>
  );
};

export default DataCard;
