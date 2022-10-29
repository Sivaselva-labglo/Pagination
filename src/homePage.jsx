import { Card, CardContent, CardMedia, MenuItem, Pagination, Select, TablePagination, Typography } from "@mui/material";
import axios from "axios";
import { React, useState, useEffect } from "react";

const Homepage = () => {
  const [apiData, setApiData] = useState({})
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const ChangePage = (event, value) => {
    setPage(value);
    console.log('newPage ', event)
    console.log('Page ', page)
  };

  const handlePageChange = (event) => {
    setPage(event.target.value)
  }

  const ChangeRowsPerPage = (event, value) => {
    setRowsPerPage(parseInt(event.target.value));

  }

  const fetchApi = () => {
    axios.get(`https://reqres.in/api/users?page=${page}&per_page=${parseInt(rowsPerPage)}`)
      .then((success) => setApiData(success.data))
      .catch((failed) => console.log('Error message ', failed))
  }

  useEffect(() => {
    fetchApi()
  }, [page, rowsPerPage])
  return (
    <div>
      <center>
        {
          (apiData.data)?.map((el, index) => {
            return (
              <div>
                <Card key={index} sx={{ maxWidth: 345, border: 'solid', display: 'flex' }}>
                  <img src={el.avatar} alt='no privew' />
                  <CardContent>
                    <Typography>
                      Name : {el.first_name} {el.last_name}
                    </Typography>
                    <Typography>
                      Email : {el.email}
                    </Typography>
                  </CardContent>
                </Card>
                <br />
              </div>
            )
          })
        }
      </center>
      <Pagination count={Math.ceil((apiData.total / apiData.per_page))} onChange={ChangePage} page={page} />

      <center>
        <label>RowsPerPage</label>
        <Select
          value={rowsPerPage}
          size='small'
          onChange={ChangeRowsPerPage}
          sx={{ width: '75px' }}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </center>
      <label>Jump To</label>
      <Select
        value={page}
        size='small'
        sx={{ width: '75px' }}
        onChange={handlePageChange}>
        {
          apiData.total && new Array(Math.ceil(apiData.total / apiData.per_page)).fill(0).map((el, index) => <MenuItem value={index + 1}>{index + 1}</MenuItem>)
        }
      </Select>
    </div>
  )
}
export default Homepage