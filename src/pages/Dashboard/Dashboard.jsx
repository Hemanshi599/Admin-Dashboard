import React, { useContext, useEffect, useState } from 'react'
import DashBoardBox from './components/dashBoardBox';
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { IoIosTimer } from "react-icons/io";
import { HiDotsVertical } from 'react-icons/hi';
import { Chart } from 'react-google-charts';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { MyContext } from '../../App';

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  'backgroundColor': 'transparent',
  'chartArea': { 'width': '100%', 'height': '100%' },
};

const Dashboard = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = useState('');
  const [categoryBy, setCategoryBy] = useState('');
  const [brandBy, setBrandBy] = useState('');
  const [searchBy, setSearchBy] = useState('');

  const open = Boolean(anchorEl);

  const ITEM_HEIGHT = 48;

  const context = useContext(MyContext);

  useEffect(()=> {
   context.setIsHideSidebarAndHeader(false);

   window.scrollTo(0,0);

  },[]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className='right-content w-100'>
        <div className='row dashboardBoxWrapperRow' >
          <div className='col-md-8'>
            {/* left side of dashboard */}
            <div className='dashboardBoxWrapper d-flex'>
              <DashBoardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />
              } grow={true} />
              <DashBoardBox color={["#c012e2", "#eb64fe"]} icon={<FaCartShopping />} />
              <DashBoardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} />
              <DashBoardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} />
            </div>
          </div>

          <div className='col-md-4 pl-0 topPart2'>
            <div className='box graphBox'>

              <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className="text-white mb-0 mt-0">Total Sales</h6>

                <div className="ml-auto">
                  <IconButton
                    className="mi-auto toggleIcon"
                    onClick={handleClick}
                  >
                    <HiDotsVertical />
                  </IconButton>
                  <Menu
                    className='dropdown_menu'
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}><IoIosTimer />Last Day</MenuItem>
                    <MenuItem onClick={handleClose}><IoIosTimer />Last Week</MenuItem>
                    <MenuItem onClick={handleClose}><IoIosTimer />Last Month</MenuItem>
                    <MenuItem onClick={handleClose}><IoIosTimer />Last Year</MenuItem>
                  </Menu>
                </div>
              </div>

              <h5 className='text-white font-weight-bold'>$3,787,681.00</h5>
              <p className='text-white'>$3,578.90 in last month</p>

              <Chart chartType="PieChart"
                width="100%"
                height="190px"
                data={data}
                options={options}
              />

            </div>
          </div>
        </div>



        <div className='card shadow border-0 p-3 mt-4'>
          <h3 className='hd'>Best Selling Products</h3>

          <div className='row cardFilters mt-3'>
            <div className='col md-3'>
              <h4>SHOW BY</h4>
              <Select
                value={showBy}
                onChange={(e) => setShowBy(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'without label' }}
                labelId='demo-select-small-label'
                className='w-100'
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>

            <div className='col md-3'>
              <h4>CATEGORY BY</h4>
              <Select
                value={categoryBy}
                onChange={(e) => setCategoryBy(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'without label' }}
                labelId='demo-select-small-label'
                className='w-100'
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>

            <div className='col md-3'>
              <h4>BRAND BY</h4>
              <Select
                value={brandBy}
                onChange={(e) => setBrandBy(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'without label' }}
                labelId='demo-select-small-label'
                className='w-100'
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>

            <div className='col md-3'>
              <h4>SEARCH BY</h4>
              <Select
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'without label' }}
                labelId='demo-select-small-label'
                className='w-100'
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          </div>

          <div className='table-responsive mt-3'>
            <table className='table table-bordered v-align'>
              <thead className='thead-dark'>
                <tr>
                  <th>UID</th>
                  <th style={{ width: '300px' }}>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className='d-flex align-items-center productBox'>
                      <div className='imgWrapper'>
                        <div className='img'>
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                        </div>
                      </div>
                      <div className='info pl-0'>
                        <h6>Tops and Skirts set for Female...</h6>
                        <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '50px' }}>
                      <del className='old'>$21.00</del>
                      <span className='new text-danger'>$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className='actions d-flex align-items-center'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                      <Button className="success" color="success"><FaPencilAlt /></Button>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#1</td>
                  <td>
                    <div className='d-flex align-items-center productBox'>
                      <div className='imgWrapper'>
                        <div className='img'>
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                        </div>
                      </div>
                      <div className='info pl-0'>
                        <h6>Tops and Skirts set for Female...</h6>
                        <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '50px' }}>
                      <del className='old'>$21.00</del>
                      <span className='new text-danger'>$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className='actions d-flex align-items-center'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                      <Button className="success" color="success"><FaPencilAlt /></Button>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#1</td>
                  <td>
                    <div className='d-flex align-items-center productBox'>
                      <div className='imgWrapper'>
                        <div className='img'>
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                        </div>
                      </div>
                      <div className='info pl-0'>
                        <h6>Tops and Skirts set for Female...</h6>
                        <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '50px' }}>
                      <del className='old'>$21.00</del>
                      <span className='new text-danger'>$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className='actions d-flex align-items-center'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                      <Button className="success" color="success"><FaPencilAlt /></Button>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#1</td>
                  <td>
                    <div className='d-flex align-items-center productBox'>
                      <div className='imgWrapper'>
                        <div className='img'>
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                        </div>
                      </div>
                      <div className='info pl-0'>
                        <h6>Tops and Skirts set for Female...</h6>
                        <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '50px' }}>
                      <del className='old'>$21.00</del>
                      <span className='new text-danger'>$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className='actions d-flex align-items-center'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                      <Button className="success" color="success"><FaPencilAlt /></Button>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#1</td>
                  <td>
                    <div className='d-flex align-items-center productBox'>
                      <div className='imgWrapper'>
                        <div className='img'>
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                        </div>
                      </div>
                      <div className='info pl-0'>
                        <h6>Tops and Skirts set for Female...</h6>
                        <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '50px' }}>
                      <del className='old'>$21.00</del>
                      <span className='new text-danger'>$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className='actions d-flex align-items-center'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                      <Button className="success" color="success"><FaPencilAlt /></Button>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#1</td>
                  <td>
                    <div className='d-flex align-items-center productBox'>
                      <div className='imgWrapper'>
                        <div className='img'>
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                        </div>
                      </div>
                      <div className='info pl-0'>
                        <h6>Tops and Skirts set for Female...</h6>
                        <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '50px' }}>
                      <del className='old'>$21.00</del>
                      <span className='new text-danger'>$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className='actions d-flex align-items-center'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                      <Button className="success" color="success"><FaPencilAlt /></Button>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#1</td>
                  <td>
                    <div className='d-flex align-items-center productBox'>
                      <div className='imgWrapper'>
                        <div className='img'>
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                        </div>
                      </div>
                      <div className='info pl-0'>
                        <h6>Tops and Skirts set for Female...</h6>
                        <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '50px' }}>
                      <del className='old'>$21.00</del>
                      <span className='new text-danger'>$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className='actions d-flex align-items-center'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                      <Button className="success" color="success"><FaPencilAlt /></Button>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>#1</td>
                  <td>
                    <div className='d-flex align-items-center productBox'>
                      <div className='imgWrapper'>
                        <div className='img'>
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className='w-100' />
                        </div>
                      </div>
                      <div className='info pl-0'>
                        <h6>Tops and Skirts set for Female...</h6>
                        <p>Women's exclusive summer Tops & Skirt set for Female Tops & skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div style={{ width: '50px' }}>
                      <del className='old'>$21.00</del>
                      <span className='new text-danger text-danger'>$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className='actions d-flex align-items-center'>
                      <Button className="secondary" color="secondary"><FaEye /></Button>
                      <Button className="success" color="success"><FaPencilAlt /></Button>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>

            <div className='d-flex tableFooter'>
              <p>showing <b>12</b> of <b>60</b> results</p>
              <Pagination  className="pagination" count={10} color="primary" 
              showFirstButton showLastButton />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;
