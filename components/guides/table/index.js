import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SingleCheckBox from '../singleCheckbox';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Group 1'),
  createData('Group 2'),
  createData('Group 3'),
  createData('Group 3'),
  createData('Group 3'),
  createData('Group 3'),
  createData('Group 3'),
];

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Saray</caption>
        <TableHead>
          <TableRow>
            <TableCell>Gruplar</TableCell>
            <TableCell align="right">Soru 1</TableCell>
            <TableCell align="right">Soru 2</TableCell>
            <TableCell align="right">Soru 3</TableCell>
            <TableCell align="right">Soru 4</TableCell>
            <TableCell align="right">Soru 4</TableCell>
            <TableCell align="right">Soru 4</TableCell>
            <TableCell align="right">Soru 4</TableCell>
            <TableCell align="right">Soru 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><SingleCheckBox/></TableCell>
              <TableCell align="right"><SingleCheckBox/></TableCell>
              <TableCell align="right"><SingleCheckBox/></TableCell>
              <TableCell align="right"><SingleCheckBox/></TableCell>
              <TableCell align="right"><SingleCheckBox/></TableCell>
              <TableCell align="right"><SingleCheckBox/></TableCell>
              <TableCell align="right"><SingleCheckBox/></TableCell>
              <TableCell align="right"><SingleCheckBox/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}